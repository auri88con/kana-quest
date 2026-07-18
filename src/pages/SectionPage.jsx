import { useState } from 'react'
import CharacterBrowser from '../components/CharacterBrowser'
import KanjiBrowser from '../components/KanjiBrowser'
import FlashcardQuiz from '../components/FlashcardQuiz'
import ReadingGame from '../components/ReadingGame'
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
import './SectionPage.css'

const KANJI_ANSWER_MODES = [
  { key: 'romaji', label: 'Reading', prompt: 'What is the reading?' },
  { key: 'meaning', label: 'Meaning', prompt: 'What does this mean?' },
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
}

export default function SectionPage({ section, onBack }) {
  const [mode, setMode] = useState('learn')
  const [tier, setTier] = useState(1)
  const config = SECTION_CONFIG[section]

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
          onClick={() => setMode('learn')}
        >
          📖 Learn
        </button>
        <button
          type="button"
          className={`pill-tab ${mode === 'quiz' ? 'is-active' : ''}`}
          onClick={() => setMode('quiz')}
        >
          🎯 Flashcard Quiz
        </button>
        <button
          type="button"
          className={`pill-tab ${mode === 'reading' ? 'is-active' : ''}`}
          onClick={() => setMode('reading')}
        >
          📝 Reading Game
        </button>
      </div>

      {config.isKanji && (mode === 'learn' || mode === 'quiz') && (
        <div className="pill-tabs tier-tabs">
          {Object.entries(config.tierMeta).map(([tierKey, meta]) => (
            <button
              key={tierKey}
              type="button"
              className={`pill-tab ${tier === Number(tierKey) ? 'is-active' : ''}`}
              onClick={() => setTier(Number(tierKey))}
              title={meta.sublabel}
            >
              {meta.label}
            </button>
          ))}
        </div>
      )}

      {mode === 'learn' && config.isKanji && (
        <KanjiBrowser section={section} characters={config.tiers[tier]} />
      )}

      {mode === 'learn' && !config.isKanji && (
        <CharacterBrowser
          section={section}
          rowGroups={config.rowGroups}
          dakuonGroups={config.dakuonGroups}
          handakuonGroups={config.handakuonGroups}
          yoonGroups={config.yoonGroups}
        />
      )}

      {mode === 'quiz' && config.isKanji && (
        <FlashcardQuiz section={section} characters={config.tiers[tier]} answerModes={KANJI_ANSWER_MODES} />
      )}

      {mode === 'quiz' && !config.isKanji && <FlashcardQuiz section={section} characters={config.characters} />}

      {mode === 'reading' && <ReadingGame section={section} wordsByLevel={readingGameWords[section]} />}
    </div>
  )
}
