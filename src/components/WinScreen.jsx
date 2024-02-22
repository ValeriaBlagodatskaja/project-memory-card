import "./WinScreen.css";
import { useState } from "react";
import winGifs from "../winGifs";

const WinScreen = ({ onStartGame }) => {
  const [showCards, setShowCards] = useState(false);

  const handleStartGame = () => {
    setShowCards(true);
    onStartGame();
  };

  const randomGif = winGifs[Math.floor(Math.random() * winGifs.length)];

  return (
    <div className="end-screen-container">
      <div className="end-game-container">
        <img src={randomGif.image} />
        <h1>Congratulations!</h1>
        <p>You&apos;ve mastered Shrek&apos;s Memory Adventure.</p>
        <p>You&apos;re a true ogre achiever!</p>
        <button className="start-button" onClick={handleStartGame}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
