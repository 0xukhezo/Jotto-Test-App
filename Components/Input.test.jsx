import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute, checkProps } from "../test/testUtils";
import Input from "./Input.jsx";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false, secretWord: "party" };

let mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (inicialState) => [inicialState, mockSetCurrentGuess],
}));

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Input {...setUpProps} />);
};

test("don´t throw a error with the props", () => {
  checkProps(Input, defaultProps);
});

test("Input renders without a error", () => {
  const wrapper = setUp();
  const InputComponent = findByTestAttribute(wrapper, "component-input");
  expect(InputComponent.length).toBe(1);
});

describe("render success when the boolean is true or false", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ success: true, secretWord: "party" });
    });
    test("Imput renders without error", () => {
      const inputComponent = findByTestAttribute(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("Imput box does not show", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("Submit button does not show", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ success: false, secretWord: "party" });
    });

    test("Imput renders without error", () => {
      const inputComponent = findByTestAttribute(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("Imput box show", () => {
      const inputBox = findByTestAttribute(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("Submit button show", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe("state controlled input field", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });
  test("state update when value change in the input box", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttribute(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
