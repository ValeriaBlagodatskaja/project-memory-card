import "./LoserScreen.css";
import { useState } from "react";
import clsx from "clsx";
import loseGifs from "../loseGifs";

const LoserScreen = ({ onStartGame, className }) => {
  const [showCards, setShowCards] = useState(false);

  const handleStartGame = () => {
    setShowCards(true);
    onStartGame();
  };

  const randomGif = loseGifs[Math.floor(Math.random() * loseGifs.length)];
  console.log(randomGif);

  return (
    <div className="end-screen-container">
      <div className="end-game-container">
        <img src={randomGif.image} className={clsx("gif", className)} />
        <h1>Oops!</h1>
        <p>
          Shrek caught you clicking the same card twice. Better luck next time.
        </p>
        <p>Don&apos;t worry, ogres learn from their mistakes!</p>
        <button className="start-button" onClick={handleStartGame}>
          Play again
        </button>
      </div>
    </div>
  );
};
export default LoserScreen;
