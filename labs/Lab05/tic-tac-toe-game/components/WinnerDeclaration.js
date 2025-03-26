import React from "react";

const WinnerDeclaration = ({ winner }) => {
  return (
    <div className="mt-4">
      <h3>{winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}</h3>
    </div>
  );
};

export default WinnerDeclaration;