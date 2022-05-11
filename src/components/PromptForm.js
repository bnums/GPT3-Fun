import React from "react";

const handleSubmit = (e) => {
  console.log("Hello");
};

const PromptForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label>
        Prompt:
        <input name="submitted-prompt"></input>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default PromptForm;
