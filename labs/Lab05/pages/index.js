import { useState } from "react";
import SetupGame from "../components/SetupGame";
import PlayerNames from "../components/PlayerNames";
import WinnerDeclaration from "../components/WinnerDeclaration";

export default function Home() {
  const [difficulty, setDifficulty] = useState("hard");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [winner, setWinner] = useState(null);
  const [isAI, setIsAI] = useState(false);
  const [scores, setScores] = useState({});

  const handleWinner = (winnerName) => {
    setWinner(winnerName);
    setScores((prev) => ({
      ...prev,
      [winnerName]: (prev[winnerName] || 0) + 1,
    }));
  };

  const handleRestart = () => {
    setWinner(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe Game</h1>

      {!player1 || !player2 ? (
        <PlayerNames
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setIsAI={setIsAI}
          setDifficulty={setDifficulty}
        />
      ) : (
        <>
          <SetupGame
            player1={player1}
            player2={player2}
            setWinner={handleWinner}
            isAI={isAI}
            difficulty={difficulty}
            key={winner}
          />

          {winner && (
            <>
              <WinnerDeclaration winner={winner} />
              <button onClick={handleRestart} className="btn btn-secondary">
                Restart Game?
              </button>
              <button
                onClick={() => {
                  setPlayer1("");
                  setPlayer2("");
                  setWinner(null);
                  setScores({});
                }}
                className="btn btn-secondary"
                style={{ marginLeft: "10px" }}
              >
                Play Again 🌀
              </button>
            </>
          )}

          <div className="mt-4">
            <h4>🏆 Scoreboard 🏆</h4>
            <p>{player1}: {scores[player1] || 0}</p>
            <p>{player2}: {scores[player2] || 0}</p>
            <p>Draws: {scores.Draw || 0}</p>
          </div>
        </>
      )}
    </div>
  );
}