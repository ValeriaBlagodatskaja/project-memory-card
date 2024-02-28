import "./ScoreBoard.css";

function ScoreBoard({ currentScore, highScore }) {
  return (
    <div className="scores-container">
      <span className="score">CURRENT SCORE: {currentScore} </span>
      <span className="score">HIGH SCORE: {highScore} </span>
    </div>
  );
}

export default ScoreBoard;
