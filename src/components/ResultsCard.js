import React from "react";

const ResultsCard = ({ result }) => {
  return (
    <div className="result__card">
      <p className="result__card__prompt">Prompt: {result.prompt}</p>
      <p className="result_card_response">Response: {result.response}</p>
    </div>
  );
};

export default ResultsCard;
