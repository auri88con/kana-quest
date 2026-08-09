// Verb conjugation rule engine.
//
// Every verb is tagged with a `group` ('ichidan' | 'godan' | 'suru' | 'kuru').
// Regular forms are generated from that group's rules; real exceptions
// (行く's te/past, ある's suppletive negative) are patched in afterwards via
// the verb's `overrides`, never guessed by the rules. 来る is the one verb
// whose kanji reading itself mutates per form (来る/来ます/来ない/...), so its
// base forms are literal strings rather than a stem+suffix derivation — but
// it still flows through the same override/でした/かった cascade as every
// other verb.

const GODAN_ROW_TABLE = {
  う: { masu: ['い', 'i'], nai: ['わ', 'wa'], te: ['って', 'tte'], ta: ['った', 'tta'], romajiStripLen: 1 },
  く: { masu: ['き', 'ki'], nai: ['か', 'ka'], te: ['いて', 'ite'], ta: ['いた', 'ita'], romajiStripLen: 2 },
  ぐ: { masu: ['ぎ', 'gi'], nai: ['が', 'ga'], te: ['いで', 'ide'], ta: ['いだ', 'ida'], romajiStripLen: 2 },
  す: { masu: ['し', 'shi'], nai: ['さ', 'sa'], te: ['して', 'shite'], ta: ['した', 'shita'], romajiStripLen: 2 },
  つ: { masu: ['ち', 'chi'], nai: ['た', 'ta'], te: ['って', 'tte'], ta: ['った', 'tta'], romajiStripLen: 3 },
  ぬ: { masu: ['に', 'ni'], nai: ['な', 'na'], te: ['んで', 'nde'], ta: ['んだ', 'nda'], romajiStripLen: 2 },
  ぶ: { masu: ['び', 'bi'], nai: ['ば', 'ba'], te: ['んで', 'nde'], ta: ['んだ', 'nda'], romajiStripLen: 2 },
  む: { masu: ['み', 'mi'], nai: ['ま', 'ma'], te: ['んで', 'nde'], ta: ['んだ', 'nda'], romajiStripLen: 2 },
  る: { masu: ['り', 'ri'], nai: ['ら', 'ra'], te: ['って', 'tte'], ta: ['った', 'tta'], romajiStripLen: 2 },
}

export const POLITE_LABELS = {
  dictionary: 'Dictionary form',
  presentPolite: 'Present polite',
  presentNegative: 'Present negative',
  past: 'Past',
  pastNegative: 'Past negative',
}

export const PLAIN_LABELS = {
  dictionary: 'Dictionary form (present plain)',
  presentNegative: 'Present negative',
  past: 'Past',
  pastNegative: 'Past negative',
  te: 'Te-form',
}

function buildBaseFromFrags(verb, kanjiStem, kanaStem, romajiStem, frags) {
  const dictionary = { kanji: verb.char, kana: verb.kana, romaji: verb.romaji }
  const [masuKanji, masuKana, masuRomaji] = frags.masu
  const [naiKanji, naiKana, naiRomaji] = frags.nai
  const [teKanji, teKana, teRomaji] = frags.te
  const [taKanji, taKana, taRomaji] = frags.ta

  return {
    polite: {
      dictionary,
      presentPolite: {
        kanji: kanjiStem + masuKanji + 'ます',
        kana: kanaStem + masuKana + 'ます',
        romaji: romajiStem + masuRomaji + 'masu',
      },
      presentNegative: {
        kanji: kanjiStem + masuKanji + 'ません',
        kana: kanaStem + masuKana + 'ません',
        romaji: romajiStem + masuRomaji + 'masen',
      },
      past: {
        kanji: kanjiStem + masuKanji + 'ました',
        kana: kanaStem + masuKana + 'ました',
        romaji: romajiStem + masuRomaji + 'mashita',
      },
    },
    plain: {
      dictionary,
      presentNegative: {
        kanji: kanjiStem + naiKanji + 'ない',
        kana: kanaStem + naiKana + 'ない',
        romaji: romajiStem + naiRomaji + 'nai',
      },
      past: {
        kanji: kanjiStem + taKanji,
        kana: kanaStem + taKana,
        romaji: romajiStem + taRomaji,
      },
      te: {
        kanji: kanjiStem + teKanji,
        kana: kanaStem + teKana,
        romaji: romajiStem + teRomaji,
      },
    },
  }
}

function buildIchidanBase(verb) {
  const kanjiStem = verb.char.slice(0, -1)
  const kanaStem = verb.kana.slice(0, -1)
  const romajiStem = verb.romaji.slice(0, -2) // drop 'ru'
  return buildBaseFromFrags(verb, kanjiStem, kanaStem, romajiStem, {
    masu: ['', '', ''],
    nai: ['', '', ''],
    te: ['て', 'て', 'te'],
    ta: ['た', 'た', 'ta'],
  })
}

function buildGodanBase(verb) {
  const row = GODAN_ROW_TABLE[verb.kana.slice(-1)]
  const kanjiStem = verb.char.slice(0, -1)
  const kanaStem = verb.kana.slice(0, -1)
  const romajiStem = verb.romaji.slice(0, -row.romajiStripLen)
  return buildBaseFromFrags(verb, kanjiStem, kanaStem, romajiStem, {
    masu: [row.masu[0], row.masu[0], row.masu[1]],
    nai: [row.nai[0], row.nai[0], row.nai[1]],
    te: [row.te[0], row.te[0], row.te[1]],
    ta: [row.ta[0], row.ta[0], row.ta[1]],
  })
}

function buildSuruBase(verb) {
  const kanjiStem = verb.char.slice(0, -2) // drop する
  const kanaStem = verb.kana.slice(0, -2)
  const romajiStem = verb.romaji.slice(0, -4) // drop 'suru'
  return buildBaseFromFrags(verb, kanjiStem, kanaStem, romajiStem, {
    masu: ['し', 'し', 'shi'],
    nai: ['し', 'し', 'shi'],
    te: ['して', 'して', 'shite'],
    ta: ['した', 'した', 'shita'],
  })
}

// 来る keeps its kanji glyph across every form, but the glyph's reading
// mutates (来る kuru / 来ます kimasu / 来ない konai / 来た kita / 来て kite) via
// vowel alternation that no stem+suffix rule can derive — so these are
// literal forms, not a computation. They still pass through the same
// でした/かった cascade in finalize() as every other verb's base forms.
function buildKuruBase(verb) {
  const dictionary = { kanji: verb.char, kana: verb.kana, romaji: verb.romaji }
  return {
    polite: {
      dictionary,
      presentPolite: { kanji: '来ます', kana: 'きます', romaji: 'kimasu' },
      presentNegative: { kanji: '来ません', kana: 'きません', romaji: 'kimasen' },
      past: { kanji: '来ました', kana: 'きました', romaji: 'kimashita' },
    },
    plain: {
      dictionary,
      presentNegative: { kanji: '来ない', kana: 'こない', romaji: 'konai' },
      past: { kanji: '来た', kana: 'きた', romaji: 'kita' },
      te: { kanji: '来て', kana: 'きて', romaji: 'kite' },
    },
  }
}

function deshitaSuffix(form) {
  return {
    kanji: form.kanji + 'でした',
    kana: form.kana + 'でした',
    romaji: `${form.romaji} deshita`,
  }
}

function kattaSuffix(form) {
  return {
    kanji: form.kanji.slice(0, -1) + 'かった',
    kana: form.kana.slice(0, -1) + 'かった',
    romaji: `${form.romaji.slice(0, -1)}katta`,
  }
}

function patchForm(form, override) {
  return override ? { ...form, ...override } : form
}

// Applies overrides to the base forms first, THEN derives pastNegative from
// the (possibly-overridden) presentNegative — this ordering is what makes
// ある's suppletive plain negative ("nai", not "aranai") correctly cascade
// into "nakatta" rather than the regular-rule "aranakatta".
function finalize(base, overrides) {
  const politeOverrides = overrides?.polite ?? {}
  const plainOverrides = overrides?.plain ?? {}

  const politeDictionary = patchForm(base.polite.dictionary, politeOverrides.dictionary)
  const politePresent = patchForm(base.polite.presentPolite, politeOverrides.presentPolite)
  const politeNegative = patchForm(base.polite.presentNegative, politeOverrides.presentNegative)
  const politePast = patchForm(base.polite.past, politeOverrides.past)
  const politePastNegative = patchForm(deshitaSuffix(politeNegative), politeOverrides.pastNegative)

  const plainDictionary = patchForm(base.plain.dictionary, plainOverrides.dictionary)
  const plainNegative = patchForm(base.plain.presentNegative, plainOverrides.presentNegative)
  const plainPast = patchForm(base.plain.past, plainOverrides.past)
  const plainTe = patchForm(base.plain.te, plainOverrides.te)
  const plainPastNegative = patchForm(kattaSuffix(plainNegative), plainOverrides.pastNegative)

  return {
    polite: [
      { key: 'dictionary', label: POLITE_LABELS.dictionary, ...politeDictionary },
      { key: 'presentPolite', label: POLITE_LABELS.presentPolite, ...politePresent },
      { key: 'presentNegative', label: POLITE_LABELS.presentNegative, ...politeNegative },
      { key: 'past', label: POLITE_LABELS.past, ...politePast },
      { key: 'pastNegative', label: POLITE_LABELS.pastNegative, ...politePastNegative },
    ],
    plain: [
      { key: 'dictionary', label: PLAIN_LABELS.dictionary, ...plainDictionary },
      { key: 'presentNegative', label: PLAIN_LABELS.presentNegative, ...plainNegative },
      { key: 'past', label: PLAIN_LABELS.past, ...plainPast },
      { key: 'pastNegative', label: PLAIN_LABELS.pastNegative, ...plainPastNegative },
      { key: 'te', label: PLAIN_LABELS.te, ...plainTe },
    ],
  }
}

// Returns { polite: Form[5], plain: Form[5] }, Form = { key, label, kanji, kana, romaji }.
export function conjugate(verb) {
  let base
  if (verb.group === 'kuru') base = buildKuruBase(verb)
  else if (verb.group === 'suru') base = buildSuruBase(verb)
  else if (verb.group === 'ichidan') base = buildIchidanBase(verb)
  else base = buildGodanBase(verb)
  return finalize(base, verb.overrides)
}
