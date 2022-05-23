import React from "react";
import { useState } from "react";
import "../style/PromptForm.css";
import { promptOpenAI } from "../axios";

const PromptForm = ({ prompt, setPrompt, results, setResults }) => {
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("button--loading");

    try {
      const { choices } = await promptOpenAI({ prompt: prompt });
      setResults([...results, { prompt: prompt, response: choices[0].text }]);
      setPrompt("");
      setLoading("");
    } catch (err) {
      console.error(err);
      setLoading("");
    }
  };

  return (
    <section className="prompt">
      <form className="prompt__form" onSubmit={handleSubmit}>
        <label>
          <h2 className="prompt__form__label">User Prompt:</h2>
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
        <div className="prompt__button__group">
          <button
            className={`prompt__submit__button ${loading}`}
            disabled={loading === "button--loading" ? true : false}
          >
            <span className="prompt__submit__button__text">Submit</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default PromptForm;
