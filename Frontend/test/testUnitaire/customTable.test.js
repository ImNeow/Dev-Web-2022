import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import CustomTable from "../../src/Components/Administration/CustomTable"

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


it("Test du champ Name dans le composant Edit.js", () => {
const TestObjet = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "test","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet}/>, container);
  expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.name);

const TestObjet2 = {"_id": "123","name": "","link": "https://www.test.com/","type": "test","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet2}/>, container);
  expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Nom Incorrecte");


});

it("Test du champ Link dans le composant Edit.js", () => {
const TestObjet = {"_id": "123","name": "Test","link": "https://www.test.com/pic.jpg","type": "test","description": "Test description","price": 10}

render(<CustomTable myObjet={TestObjet}/>, container);
expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.link);


const TestObjet2 = {"_id": "123","name": "Test","link": "","type": "test","description": "Test description","price": 10}

render(<CustomTable myObjet={TestObjet2}/>, container);
expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Lien Incorrecte");  


const TestObjet3 = {"_id": "123","name": "Test","link": "ttps://www.test.com/imagetest2.jpg","type": "test","description": "Test description","price": 10}

render(<CustomTable myObjet={TestObjet3}/>, container);
expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Lien Incorrecte");  


const TestObjet4 = {"_id": "123","name": "Test","link": "www.test.com","type": "test","description": "Test description","price": 10}

render(<CustomTable myObjet={TestObjet4}/>, container);
expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Lien Incorrecte");

const TestObjet5 = {"_id": "123","name": "Test","link": "https://www.test.com/imagetest1.jg","type": "test","description": "Test description","price": 10}

render(<CustomTable myObjet={TestObjet5}/>, container);
expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Lien Incorrecte");

});


it("Test du champ Type dans le composant Edit.js", () => {
const TestObjet = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "statuette","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet}/>, container);
  expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.type);

const TestObjet2 = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "typeIncorrecte","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet2}/>, container);
  expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Type Incorrecte");
  
});

it("Test du champ Description dans le composant Edit.js", () => {
const TestObjet = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "test","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet}/>, container);
  expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.description);

const TestObjet2 = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "test","description": " ","price": 10}

  render(<CustomTable myObjet={TestObjet2}/>, container);
  expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Description Incorrecte");

});


it("Test du champ Prix dans le composant Edit.js", () => {
const TestObjet = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "test","description": "Test description","price": 10}

  render(<CustomTable myObjet={TestObjet}/>, container);
  expect(container.querySelector('data-testid="name"').textContent).toBe(TestObjet.name);

const TestObjet2 = {"_id": "123","name": "Test","link": "https://www.test.com/","type": "test","description": "Test description","price": -1}
  
    render(<CustomTable myObjet={TestObjet2}/>, container);
    expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Prix Incorrecte");
  
const TestObjet3 = {"_id": "123", "name": "Test","link": "https://www.test.com/","type": "test","description": "Test description","price": 0}

  render(<CustomTable myObjet={TestObjet3}/>, container);
  expect(container.querySelector('data-testid="errorlog"').textContent).toBe("Prix Incorrecte");

});