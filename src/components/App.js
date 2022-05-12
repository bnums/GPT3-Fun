import "../style/App.css";
import { useState } from "react";
import PromptForm from "./PromptForm";
import Results from "./Results";

function App() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div>Welcome to GPT-3 Fun</div>
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
