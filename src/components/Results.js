import React from "react";
import ResultsCard from "./ResultsCard";
import "../style/Results.css";

const Results = ({ results }) => {
  return (
    <section className="results">
      <h2 className="results__title">Responses:</h2>
      <div className="results__container">
        {results?.length
          ? results
              .slice(0)
              .reverse()
              .map((result, i) => <ResultsCard key={i} result={result} />)
          : null}
      </div>
    </section>
  );
};

export default Results;
