import './App.css';
import MusicBody from './components/MusicBody';
import MusicControls from './components/MusicControls'

const App = () => {
  return (
    <div className="player">
      <MusicBody />
      <MusicControls />
    </div>
  )
}

export default App

