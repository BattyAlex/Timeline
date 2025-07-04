import { useState } from 'react'
import './App.css'

function App() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
 

  const correctCode = '7125643980';
const handleSubmit = () => {
  const success = code === correctCode;
  setIsCorrect(success);
  setShowOverlay(true);
  setMessage(success ? '✅ Code accepted!' : '❌ Incorrect code, try again.');

  const soundId = success ? 'success-sound' : 'fail-sound';
  document.getElementById(soundId)?.play();

  setTimeout(() => {
    setShowOverlay(false);
  }, 5000);
};

  return (
    <>
    {showOverlay && (
  <div className="overlay">
    <img
    src={isCorrect ? `${import.meta.env.BASE_URL}success.png` : `${import.meta.env.BASE_URL}fail.png`}
    alt="result"
    className="overlay-image"
    />
  </div>
)}
    
    <audio id="success-sound" src={`${import.meta.env.BASE_URL}success.mp3`} preload="auto" />
    <audio id="fail-sound" src={`${import.meta.env.BASE_URL}failed.mp3`} preload="auto" />
    
      <div>
          <img
            src={`${import.meta.env.BASE_URL}timeline.png`}
            className="logo"
            alt="timeline logo"
          />
      </div>
      <h1>Input your combination</h1>
      <div className="card">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder= "Enter code"/>
        <button onClick={handleSubmit}>Submit</button>
        {message && (<p>{message}</p>)}
      </div>
    </>
  );
}

export default App
