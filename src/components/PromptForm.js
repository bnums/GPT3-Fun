import React from "react";
import "../style/PromptForm.css";
import { promptOpenAI } from "../api";

const PromptForm = ({ prompt, setPrompt, results, setResults }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 68,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      const engine = "/text-curie-001";
      const { choices } = await promptOpenAI(engine, body);
      setResults([...results, { prompt: prompt, response: choices[0].text }]);
      setPrompt("");
    } catch (err) {
      console.error(err);
    }
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
