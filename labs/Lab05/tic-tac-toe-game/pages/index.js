import { useState } from "react";
import SetupGame from "../components/SetupGame";
import PlayerNames from "../components/PlayerNames";
import WinnerDeclaration from "../components/WinnerDeclaration";

export default function Home() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [winner, setWinner] = useState(null);
  const [isAI, setIsAI] = useState(false);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe Game</h1>
      {!player1 || !player2 ? (
        <PlayerNames setPlayer1={setPlayer1} setPlayer2={setPlayer2} setIsAI={setIsAI} />
      ) : (
        <>
          <SetupGame player1={player1} player2={player2} setWinner={setWinner} isAI={isAI} />
          {winner && <WinnerDeclaration winner={winner} />}
        </>
      )}
    </div>
  );
}