import '../styles/MusicControls.css'

const MusicControls = () => {
  return (
    <div className="controls">
      <button><i className="fas fa-backward fa-xl"></i></button>
      <button><i className="fas fa-play fa-xl"></i></button>
      <button><i className="fas fa-forward fa-xl"></i></button>
    </div>
  )
}

export default MusicControls