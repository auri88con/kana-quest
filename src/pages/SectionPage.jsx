import CharacterBrowser from '../components/CharacterBrowser'
import KanjiBrowser from '../components/KanjiBrowser'
import VerbBrowser from '../components/VerbBrowser'
import FlashcardQuiz from '../components/FlashcardQuiz'
import ReadingGame from '../components/ReadingGame'
import ConjugationQuiz from '../components/ConjugationQuiz'
import { useSettingsContext } from '../context/SettingsContext'
import { readingGameWords } from '../data/readingGame'
import {
  hiraganaAllCharacters,
  hiraganaMainRows,
  hiraganaVoiced,
  hiraganaHandakuon,
  hiraganaYoon,
} from '../data/hiragana'
import {
  katakanaAllCharacters,
  katakanaMainRows,
  katakanaVoiced,
  katakanaHandakuon,
  katakanaYoon,
} from '../data/katakana'
import { kanjiAllCharacters, kanjiTiers, kanjiTierMeta } from '../data/kanji'
import { verbAllCharacters, verbTiers, verbTierMeta } from '../data/verbs'
import './SectionPage.css'

const KANJI_ANSWER_MODES = [
  { key: 'romaji', label: 'Reading', prompt: 'What is the reading?' },
  { key: 'meaning', label: 'Meaning', prompt: 'What does this mean?' },
]

const VERB_ANSWER_MODES = [
  { key: 'romaji', label: 'Reading', prompt: 'What is the reading?' },
  { key: 'meaning', label: 'Meaning', prompt: 'What does this verb mean?' },
]

const SECTION_CONFIG = {
  hiragana: {
    label: 'Hiragana',
    ready: true,
    characters: hiraganaAllCharacters,
    rowGroups: hiraganaMainRows,
    dakuonGroups: hiraganaVoiced,
    handakuonGroups: hiraganaHandakuon,
    yoonGroups: hiraganaYoon,
  },
  katakana: {
    label: 'Katakana',
    ready: true,
    characters: katakanaAllCharacters,
    rowGroups: katakanaMainRows,
    dakuonGroups: katakanaVoiced,
    handakuonGroups: katakanaHandakuon,
    yoonGroups: katakanaYoon,
  },
  kanji: {
    label: 'Kanji',
    ready: true,
    isKanji: true,
    characters: kanjiAllCharacters,
    tiers: kanjiTiers,
    tierMeta: kanjiTierMeta,
  },
  verbs: {
    label: 'Verbs',
    ready: true,
    isVerbs: true,
    characters: verbAllCharacters,
    tiers: verbTiers,
    tierMeta: verbTierMeta,
  },
}

// Mode/tier/style/script all live in the URL (see utils/routes.js) so the back
// button walks back through them. Mode changes push a history entry; the
// refinement tabs replace the current one.
export default function SectionPage({ view, onChange, onBack }) {
  const { settings } = useSettingsContext()
  const config = SECTION_CONFIG[view.section]
  const mode = view.mode
  const style = view.style
  const script = view.script ?? settings.quiz.verbScript
  const tier = config.tiers && !config.tiers[view.tier] ? 1 : view.tier

  if (!config.ready) {
    return (
      <div className="section-page">
        <button type="button" className="btn btn-outline back-btn" onClick={onBack}>
          ← Home
        </button>
        <div className="coming-soon card-surface anim-pop-in">
          <span className="coming-soon-emoji" aria-hidden="true">🚧</span>
          <h2>{config.label} is on the way!</h2>
          <p>This section is being crafted for a future stage. Check back soon!</p>
        </div>
      </div>
    )
  }

  const tierCharacters = config.tiers ? config.tiers[tier] : config.characters

  return (
    <div className="section-page">
      <div className="section-page-top">
        <button type="button" className="btn btn-outline back-btn" onClick={onBack}>
          ← Home
        </button>
        <h2>{config.label}</h2>
      </div>

      <div className="pill-tabs mode-tabs">
        <button
          type="button"
          className={`pill-tab ${mode === 'learn' ? 'is-active' : ''}`}
          onClick={() => onChange({ mode: 'learn' })}
        >
          📖 Learn
        </button>
        <button
          type="button"
          className={`pill-tab ${mode === 'quiz' ? 'is-active' : ''}`}
          onClick={() => onChange({ mode: 'quiz' })}
        >
          🎯 Flashcard Quiz
        </button>
        <button
          type="button"
          className={`pill-tab ${mode === 'reading' ? 'is-active' : ''}`}
          onClick={() => onChange({ mode: 'reading' })}
        >
          📝 Reading Game
        </button>
        {config.isVerbs && (
          <button
            type="button"
            className={`pill-tab ${mode === 'conjugation' ? 'is-active' : ''}`}
            onClick={() => onChange({ mode: 'conjugation' })}
          >
            🔤 Conjugation Quiz
          </button>
        )}
      </div>

      {config.tiers && (mode === 'learn' || mode === 'quiz' || mode === 'conjugation') && (
        <div className="pill-tabs tier-tabs">
          {Object.entries(config.tierMeta).map(([tierKey, meta]) => (
            <button
              key={tierKey}
              type="button"
              className={`pill-tab ${tier === Number(tierKey) ? 'is-active' : ''}`}
              onClick={() => onChange({ tier: Number(tierKey) }, { replace: true })}
              title={meta.sublabel}
            >
              {meta.label}
            </button>
          ))}
        </div>
      )}

      {config.isVerbs && (mode === 'learn' || mode === 'conjugation') && (
        <div className="pill-tabs style-tabs">
          <button
            type="button"
            className={`pill-tab ${style === 'polite' ? 'is-active' : ''}`}
            onClick={() => onChange({ style: 'polite' }, { replace: true })}
          >
            Polite (です・ます)
          </button>
          <button
            type="button"
            className={`pill-tab ${style === 'plain' ? 'is-active' : ''}`}
            onClick={() => onChange({ style: 'plain' }, { replace: true })}
          >
            Plain (casual)
          </button>
        </div>
      )}

      {config.isVerbs && mode === 'quiz' && (
        <div className="pill-tabs script-tabs">
          <button
            type="button"
            className={`pill-tab ${script === 'char' ? 'is-active' : ''}`}
            onClick={() => onChange({ script: 'char' }, { replace: true })}
          >
            漢字
          </button>
          <button
            type="button"
            className={`pill-tab ${script === 'kana' ? 'is-active' : ''}`}
            onClick={() => onChange({ script: 'kana' }, { replace: true })}
          >
            かな
          </button>
        </div>
      )}

      {/* Keyed so switching any tab replays the pane's entrance animation and
          quiz components remount with a fresh question set. */}
      <div className="section-pane" key={`${mode}:${tier}:${style}:${script}`}>
        {mode === 'learn' && config.isVerbs && (
          <VerbBrowser section={view.section} characters={tierCharacters} style={style} />
        )}

        {mode === 'learn' && config.isKanji && <KanjiBrowser section={view.section} characters={tierCharacters} />}

        {mode === 'learn' && !config.isVerbs && !config.isKanji && (
          <CharacterBrowser
            section={view.section}
            rowGroups={config.rowGroups}
            dakuonGroups={config.dakuonGroups}
            handakuonGroups={config.handakuonGroups}
            yoonGroups={config.yoonGroups}
          />
        )}

        {mode === 'quiz' && config.isVerbs && (
          <FlashcardQuiz
            section={view.section}
            characters={tierCharacters}
            answerModes={VERB_ANSWER_MODES}
            promptKey={script}
          />
        )}

        {mode === 'quiz' && config.isKanji && (
          <FlashcardQuiz section={view.section} characters={tierCharacters} answerModes={KANJI_ANSWER_MODES} />
        )}

        {mode === 'quiz' && !config.isVerbs && !config.isKanji && (
          <FlashcardQuiz section={view.section} characters={config.characters} />
        )}

        {mode === 'reading' && <ReadingGame section={view.section} wordsByLevel={readingGameWords[view.section]} />}

        {mode === 'conjugation' && config.isVerbs && <ConjugationQuiz verbs={tierCharacters} style={style} />}
      </div>
    </div>
  )
}
