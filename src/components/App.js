import "../style/App.css";
import { useState } from "react";
import PromptForm from "./PromptForm";
import Results from "./Results";

function App() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className="app__container">
      <section className="intro__section">
        <h1 className="intro__section__title">Welcome to Fun with GPT-3</h1>
        <p className="intro__section__paragraph">
          This is a simple app designed as an introduction to the GPT-3 API
          created by Open-AI. The form below primarily takes in text prompts for
          completion. Please enter a prompt to begin.
        </p>
      </section>
      <PromptForm
        prompt={prompt}
        setPrompt={setPrompt}
        results={results}
        setResults={setResults}
      />
      <Results results={results} />
    </div>
  );
}

export default App;
