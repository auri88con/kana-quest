import { useState } from 'react'
import CharacterBrowser from '../components/CharacterBrowser'
import FlashcardQuiz from '../components/FlashcardQuiz'
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
import './SectionPage.css'

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
  kanji: { label: 'Kanji', ready: false },
}

export default function SectionPage({ section, onBack }) {
  const [mode, setMode] = useState('learn')
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
        <button type="button" className="pill-tab is-disabled" disabled title="Coming in a future stage">
          📝 Reading Game (soon)
        </button>
      </div>

      {mode === 'learn' && (
        <CharacterBrowser
          section={section}
          rowGroups={config.rowGroups}
          dakuonGroups={config.dakuonGroups}
          handakuonGroups={config.handakuonGroups}
          yoonGroups={config.yoonGroups}
        />
      )}

      {mode === 'quiz' && <FlashcardQuiz section={section} characters={config.characters} />}
    </div>
  )
}
