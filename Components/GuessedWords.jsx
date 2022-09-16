import React from "react";
import propTypes from "prop-types";
import "./GuessedWords.css"

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWords: propTypes.string.isRequired,
      counterOfWordsMatches: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default function GuessedWords({ guessedWords, counterOfWordsMatches }) {
  let contents;
  const guessedWordsRows = guessedWords.map((word, index) =>{
    return <tr key={index} data-test="guessed-word">
      <td>{word.guessedWords}</td>
      <td>{word.counterOfWordsMatches}</td>
    </tr>
  })
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="component-instruccions">
        Try to find the correct word
      </span>
    );
  } else {
    contents = (
      <div data-test="guessed-words" className="container-table">
        <h3>Guessed Words</h3>
        <table className="table table-striped">
          <thead>
            <tr><th>Guess</th><th>Matching Words</th></tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }
  return <div data-test="component-guessed-words">{contents}</div>;
}
