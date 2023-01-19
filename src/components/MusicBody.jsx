import '../styles/MusicBody.css';
import CoverImage from '../images/img1.jpeg';

const MusicBody = () => {
  return (
    <div className="music-wrapper">
      <div className="music-info">
        <div className="music-artist">Korn</div>
        <div className="music-title">Did my time</div>
      </div>
      <img src={CoverImage} className="music-cover"/>
    </div>
  )
}

export default MusicBody