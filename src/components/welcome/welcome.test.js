import Welcome from "./welcome";
import React from "react";
import { render } from "@testing-library/react";
import { useHistory } from "react-router-dom";

test("renders learn react link", () => {
  const { container } = render(<Welcome />);
  expect(container.firstChild).toHaveClass("app-wrapper");
});
