import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords.jsx";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = [{ guessedWords: "train", counterOfWordsMatches: 3 }];

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setUpProps} />);
};

test("don´t throw a error with the props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are not word guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWords: [] });
  });
  test("renders without a error", () => {
    const component = findByTestAttribute(
      wrapper,
      "component-guessed-words"
    );
    expect(component.length).toBe(1);
  });
  test("render instruccions to guess a word", () => {
    const instruccions = findByTestAttribute(
      wrapper,
      "component-instruccions"
    );
    expect(instruccions.text().length).not.toBe(0);
  });
});

describe("if there are word guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWords: "train", counterOfWordsMatches: 3 },
    { guessedWords: "agile", counterOfWordsMatches: 1 },
    { guessedWords: "party", counterOfWordsMatches: 5 },
  ]
  beforeEach(() => {
    wrapper = setUp({ guessedWords });
  });
  test("renders without a error", () => {
    const component = findByTestAttribute(
      wrapper,
      "component-guessed-words"
    );
    expect(component.length).toBe(1);
  });
  test("render guess word section", () => {
    const guessWordSection = findByTestAttribute(
      wrapper,
      "guessed-words"
    );
    expect(guessWordSection.length).toBe(1);
  });
  test("render correct number of guessed words", () => {
    const guessWordNumber = findByTestAttribute(
      wrapper,
      "guessed-word"
    );
    expect(guessWordNumber.length).toBe(guessedWords.length);
  });
});
