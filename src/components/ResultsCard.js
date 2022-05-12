import React from "react";

const ResultsCard = ({ result }) => {
  return (
    <div className="result__card">
      <p className="result__card__prompt">{result}</p>
    </div>
  );
};

export default ResultsCard;
