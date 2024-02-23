import "./LoseScreen.css";
import { useState } from "react";
import clsx from "clsx";
import loseGifs from "../loseGifs";

const LoseScreen = ({ onStartGame, className }) => {
  const [showCards, setShowCards] = useState(false);

  const handleStartGame = () => {
    setShowCards(true);
    onStartGame();
  };

  const randomGif = loseGifs[Math.floor(Math.random() * loseGifs.length)];
  console.log(randomGif);

  return (
    <div className="lose-screen-container">
      <img src={randomGif.image} className={clsx("gif", className)} />
      <div className="text-container">
        <h1 className="oops">Oops!</h1>
        <p>Shrek caught you clicking the same card twice.</p>
        <p>Don&apos;t worry, ogres learn from their mistakes!</p>
        <button className="start-button" onClick={handleStartGame}>
          Play again
        </button>
      </div>
    </div>
  );
};
export default LoseScreen;
