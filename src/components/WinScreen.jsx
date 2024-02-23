import "./WinScreen.css";
import { useState } from "react";
import clsx from "clsx";
import winGifs from "../winGifs";

const WinScreen = ({ onStartGame, className }) => {
  const [showCards, setShowCards] = useState(false);

  const handleStartGame = () => {
    setShowCards(true);
    onStartGame();
  };

  const randomGif = winGifs[Math.floor(Math.random() * winGifs.length)];

  return (
    <div className="win-screen-container">
      <img src={randomGif.image} className={clsx("gif", className)} />
      <div className="text-container">
        <h1 className="congratulations">Congratulations!</h1>
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
