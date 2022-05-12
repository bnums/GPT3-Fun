import React from "react";
import ResultsCard from "./ResultsCard";

const Results = ({ results }) => {
  return (
    <section className="results">
      <h1>Results</h1>
      <div className="results__container">
        {results?.length
          ? results.map((result, i) => <ResultsCard key={i} result={result} />)
          : null}
      </div>
    </section>
  );
};

export default Results;
