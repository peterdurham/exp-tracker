import React from "react";
import ReactDOM from "react-dom";
import MainMenu from "./MainMenu";

test("renders specific text to the screen", () => {
  const container = document.createElement("div");

  const active = {
    name: "Roberto"
  };

  ReactDOM.render(<MainMenu activeUser={active.name} />, container);
  expect(container.textContent).toMatch("EXP");
  expect(container.textContent).toMatch("New Profile");
  expect(container.textContent).toMatch("Continue as ");
  expect(container.textContent).toMatch("Switch User");
});
