import React, { useState } from "react";

const PlayerNames = ({ setPlayer1, setPlayer2, setIsAI }) => {
  const [name1, setName1] = useState("");

  const handleStartGame = (vsAI) => {
    setPlayer1(name1 || "Player 1");
    setPlayer2(vsAI ? "AI" : "Player 2");
    setIsAI(vsAI);
  };

  return (
    <div>
      <h2>Enter Player Name</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <button onClick={() => handleStartGame(false)}>Play vs Player</button>
      <button onClick={() => handleStartGame(true)}>Play vs AI</button>
    </div>
  );
};

export default PlayerNames;