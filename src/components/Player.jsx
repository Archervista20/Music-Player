import '../styles/styles.css'
import CoverImg from "../images/img1.jpeg"
const Player = () => {
  return (
    <div>
      <div className="music-player-wrapper">
        <div className="music-info">
          <h1 className="artist">Lorem</h1>
          <h2 className="title">Ipsum</h2>
          <img src={CoverImg}/>
        </div>
        <div className="music-controls-wrapper">
        <div className="progress-bar-wrapper">
          <div className="progress-bar"></div>
        </div>
          <button><i className=" fas fa-backward fa-2x"></i></button>
          <button><i className=" fas fa-play fa-3x"></i></button>
          <button><i className=" fas fa-forward fa-2x"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Player