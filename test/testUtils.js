import checkPropTypes from "check-prop-types";

export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
};
