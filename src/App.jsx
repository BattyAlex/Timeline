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
      <div className="keypad-container">
        <input
          type="text"
          value={code}
          readOnly
          placeholder="Enter code"
          className="keypad-display"
        />

      <div className="keypad">
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => setCode(code + num)}>{num}</button>
      ))}
        <button onClick={() => setCode(code.slice(0, -1))}>⌫</button>
        <button onClick={handleSubmit}>✔</button>
      </div>
    </div>
    </>
  );
}

export default App
