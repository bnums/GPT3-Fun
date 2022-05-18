import React from "react";
import "../style/ResultsCard.css";

const ResultsCard = ({ result }) => {
  return (
    <div className="result__card">
      <h3 className="result__card__prompt">User Prompt:</h3>
      <p>{result.prompt}</p>
      <h3 className="result__card__response">Response:</h3>
      <p>{result.response}</p>
    </div>
  );
};

export default ResultsCard;
