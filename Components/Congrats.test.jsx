import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats.jsx";
import { findByTestAttribute, checkProps } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setUp();
  const component = findByTestAttribute(wrapper, "congrats-component");
  expect(component.length).toBe(1);
});

test("no renders congrats text when ´success´ is false", () => {
  const wrapper = setUp({ success: false });
  const message = findByTestAttribute(wrapper, "congrats-component");
  expect(message.text()).toBe("");
});

test("renders congrats text when `success` is true", () => {
  const wrapper = setUp({ success: true });
  const message = findByTestAttribute(wrapper, "congrats-component");
  expect(message.text().length).not.toBe(0);
});

test("check the type of the props in the congrats component", () => {
  const expectedProps = { success: true };
  const propError = checkProps(Congrats, expectedProps);
  expect(propError).toBeUndefined();
});
