import "./App.css";
import clsx from "clsx";
import Card from "./components/Card";
import { useState } from "react";
import initialCards from "./cardsData.jsx";
import StartScreen from "./components/StartScreen";
import ScoreBoard from "./components/ScoreBoard";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";
import MusicButton from "./components/MusicButton";
import shrekMusic from "./assets/all-star.mp3";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showWinScreen, setShowWinScreen] = useState(false);
  const [showLoseScreen, setShowLoseScreen] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(initialCards);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardSelect = (index) => {
    setCards((prevCards) => {
      if (prevCards[index].hasBeenClicked) {
        setShowLoseScreen(true);
        setGameStarted(false);
        setCurrentScore(0);
        return initialCards.map((card) => ({ ...card, hasBeenClicked: false }));
      }

      const updatedCards = prevCards.map((card, i) =>
        i === index ? { ...card, hasBeenClicked: true } : card
      );

      const allCardsClicked = updatedCards.every((card) => card.hasBeenClicked);

      if (allCardsClicked) {
        setShowWinScreen(true);
        setGameStarted(false);
        setCurrentScore(0);
        setHighScore((prevHighScore) =>
          currentScore + 1 > prevHighScore ? currentScore + 1 : prevHighScore
        );
        return initialCards.map((card) => ({ ...card, hasBeenClicked: false }));
      }

      shuffle(updatedCards);

      setCurrentScore((prevScore) => prevScore + 1);

      setHighScore((prevHighScore) =>
        currentScore + 1 > prevHighScore ? currentScore + 1 : prevHighScore
      );
      return updatedCards;
    });
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setShowWinScreen(false);
    setShowLoseScreen(false);
  };

  return (
    <>
      <div
        className={clsx("app", gameStarted ? "game-screen" : "start-screen")}
      >
        <div className="music-button-container">
          <MusicButton musicFile={shrekMusic} />
        </div>
        {gameStarted ? (
          <div className="game-container">
            <ScoreBoard currentScore={currentScore} highScore={highScore} />
            <div className="cards-container">
              {cards.map(({ image, imageAlt }, index) => {
                return (
                  <Card
                    key={image}
                    onClick={() => handleCardSelect(index)}
                    image={image}
                    imageAlt={imageAlt}
                  />
                );
              })}
            </div>

            <span className="game-progress">
              {currentScore} / {initialCards.length}{" "}
            </span>
          </div>
        ) : showLoseScreen ? (
          <LoseScreen onStartGame={handleStartGame} />
        ) : showWinScreen ? (
          <WinScreen onStartGame={handleStartGame} />
        ) : (
          <StartScreen onStartGame={handleStartGame} />
        )}
      </div>
    </>
  );
}

export default App;
