import "./App.css";
import clsx from "clsx";
import Card from "./components/Card";
import { useState } from "react";
import initialCards from "./cardsData.jsx";
import StartScreen from "./components/StartScreen";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(initialCards);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardSelect = (index) => {
    setCards((prevCards) => {
      if (prevCards[index].hasBeenClicked) {
        alert("Game over!");
        setGameStarted(false);
        setCurrentScore(0);
        return initialCards.map((card) => ({ ...card, hasBeenClicked: false }));
      }

      const updatedCards = prevCards.map((card, i) =>
        i === index ? { ...card, hasBeenClicked: true } : card
      );

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
  };

  return (
    <>
      <div
        className={clsx("app", gameStarted ? "game-screen" : "start-screen")}
      >
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
          </div>
        ) : (
          <StartScreen onStartGame={handleStartGame} />
        )}
      </div>
    </>
  );
}

export default App;
