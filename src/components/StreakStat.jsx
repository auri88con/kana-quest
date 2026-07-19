import './StreakStat.css'

export default function StreakStat({ streak }) {
  const tier = streak >= 10 ? 'is-blazing' : streak >= 5 ? 'is-hot' : streak > 0 ? 'is-warm' : ''
  return <span className={`quiz-stat streak-stat ${tier}`}>🔥 {streak}</span>
}
