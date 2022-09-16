import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ secretWord, success }) {
  const [guessedWord, setGuessedWord] = useState("");

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Enter Guess"
          value={guessedWord}
          onChange={(event) => {
            setGuessedWord(event.target.value);
          }}
        />
        <button
          className="btn btn-primary mb-2"
          data-test="submit-button"
          onClick={(event) => {
            event.preventDefault();
            setGuessedWord("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
