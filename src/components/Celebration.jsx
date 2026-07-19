import './Celebration.css'

export default function Celebration({ message }) {
  if (!message) return null
  return (
    <div className="celebration anim-pop-in" role="status">
      {message}
    </div>
  )
}
