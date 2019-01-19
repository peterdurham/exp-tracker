import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "react-testing-library";

import { renderWithRouter } from "../../test/til-client-test-utils";

import CreateProfile from "./CreateProfile";

afterEach(cleanup);

test("calls onClick when submitted", () => {
  const handleCreate = jest.fn();

  const selected = {
    favoriteFood: "green beans",
    favoriteActivity: "backgammon",
    favoriteNature: "ocean",
    profileImage: "hero"
  };

  const { getByText, getByLabelText } = renderWithRouter(
    <Link to="exp" onClick={handleCreate} />
  );

  const createButtonNode = getByText("Create Profile");
  fireEvent.click(createButtonNode);

  expect(handleCreate).toHaveBeenCalledTimes(1);
});
