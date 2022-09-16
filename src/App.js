import React, { useState } from "react";
import Congrats from "./Components/Congrats";
import GuessedWords from "./Components/GuessedWords";

function App() {
  const [success, setSuccess] = useState(false);
  let guessedWords = [ { guessedWords: "train", counterOfWordsMatches: 3 },
  { guessedWords: "agile", counterOfWordsMatches: 1 },
  { guessedWords: "party", counterOfWordsMatches: 5 },];
  const [counterOfWordsMatches, setCounterOfWordsMatches] = useState();

  setTimeout(() => {
    guessedWords.push("train");
    setCounterOfWordsMatches(1);
    setSuccess(true);
  }, 2000);

  return (
    <div class="container">
      <h1>React App</h1>
      <Congrats success={success} />
      <GuessedWords
        guessedWords={guessedWords}
        counterOfWordsMatches={counterOfWordsMatches}
      />
     
    </div>
  );
}

export default App;
