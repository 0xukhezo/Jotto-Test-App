import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import { findByTestAttribute } from "../test/testUtils";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<App />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "app-component");
  expect(appComponent).toHaveLength(1);
});
