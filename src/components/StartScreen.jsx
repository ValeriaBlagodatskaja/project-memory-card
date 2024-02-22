import "./StartScreen.css";
import { useState } from "react";

const StartScreen = ({ onStartGame }) => {
  const [showCards, setShowCards] = useState(false);

  const handleStartGame = () => {
    setShowCards(true);
    onStartGame();
  };
  return (
    <div className="start-screen-container">
      <div className="welcome-container">
        <h1>Welcome to Shrek&apos;s Memory Adventure! </h1>
        <p>
          Click on cards to earn points, but do not click the same card twice!
        </p>
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
