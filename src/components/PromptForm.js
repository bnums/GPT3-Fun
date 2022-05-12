import React from "react";
import "../style/PromptForm.css";

const PromptForm = ({ prompt, setPrompt, results, setResults }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setResults([...results, prompt]);
      setPrompt("");
    } catch (error) {
      throw error;
    }
    console.log("THESE ARE MY PROMPTS", results);
  };

  return (
    <section className="prompt">
      <h1 className="form__title">Prompt Area: </h1>
      <form className="prompt__form" onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            className="prompt__input"
            name="submitted-prompt"
            placeholder="Enter your prompt here"
            value={prompt}
            required
            type="text"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          ></input>
        </label>
        <button className="prompt__submit__button">Submit</button>
      </form>
    </section>
  );
};

export default PromptForm;
