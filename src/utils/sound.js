// Tiny WebAudio blips for quiz feedback. Synthesised rather than shipped as
// audio files: nothing extra to download, and it works offline for free.
// Callers gate this on the `sound` setting.

let audioContext = null

function getContext() {
  if (typeof window === 'undefined') return null
  const Ctor = window.AudioContext || window.webkitAudioContext
  if (!Ctor) return null
  if (!audioContext) audioContext = new Ctor()
  // Browsers start the context suspended until a user gesture; every call here
  // follows a tap or a keypress, so resuming is safe.
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {})
  return audioContext
}

function blip(ctx, { frequency, startAt, duration, type = 'sine', gain = 0.09 }) {
  const oscillator = ctx.createOscillator()
  const envelope = ctx.createGain()
  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, startAt)
  envelope.gain.setValueAtTime(0.0001, startAt)
  envelope.gain.exponentialRampToValueAtTime(gain, startAt + 0.012)
  envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + duration)
  oscillator.connect(envelope)
  envelope.connect(ctx.destination)
  oscillator.start(startAt)
  oscillator.stop(startAt + duration + 0.02)
}

const TONES = {
  // A rising two-note chime for right, one short low buzz for wrong, and a
  // bright arpeggio for streak milestones.
  correct: [
    { frequency: 660, duration: 0.11 },
    { frequency: 990, duration: 0.16, offset: 0.09 },
  ],
  wrong: [{ frequency: 190, duration: 0.2, type: 'triangle', gain: 0.07 }],
  celebrate: [
    { frequency: 660, duration: 0.1 },
    { frequency: 880, duration: 0.1, offset: 0.08 },
    { frequency: 1320, duration: 0.22, offset: 0.16 },
  ],
}

export function playSound(kind) {
  const tones = TONES[kind]
  if (!tones) return
  try {
    const ctx = getContext()
    if (!ctx) return
    const now = ctx.currentTime
    for (const tone of tones) {
      blip(ctx, { ...tone, startAt: now + (tone.offset ?? 0) })
    }
  } catch {
    // Audio is a nicety — never let it break a quiz.
  }
}
