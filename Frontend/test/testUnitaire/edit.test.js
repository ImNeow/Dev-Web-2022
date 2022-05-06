import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Edit from "../../src/Components/Administration/Edit"

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Test des props du composant Edit.js", () => {
  const TestObjet = {
    "_id": "123",
    "name": "Test",
    "link": "https://www.test.com/",
    "type": "test",
    "description": "Test description",
    "price": 10
}

  render(<Edit myObjet={TestObjet}/>, container);

  
  expect(container.querySelector('data-testid="id"').textContent).toBe(TestObjet._id);
  expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.name);
  expect(container.querySelector('data-testid="link"').textContent).toBe(TestObjet.link);
  expect(container.querySelector('data-testid="type"').textContent).toBe(TestObjet.type);
  expect(container.querySelector('data-testid="description"').textContent).toBe(TestObjet.description);
  expect(container.querySelector('data-testid="prix"').textContent).toBe(TestObjet.price);
});