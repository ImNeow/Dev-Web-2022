import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import {Objet} from "../../src/Pages/Objets";


//Création d'un container 
let container = null;

//Avant chaque test
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

//Après chaque test
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});




it("Affichage du nom des cartes", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "BD",
      "name": "Tintin au Tibet",
      "link": "https://www.test.com/imagetest1.jpg",
      "description": "Ceci est un cas",
      "price": 1,
      "__v": 0
  },
  {
      "_id": "456",
      "type": "BD",
      "name": "",
      "link": "https://www.test.com/imagetest2.jpg",
      "description": "Ceci est un deuxième cas",
      "price": 2,
      "__v": 0
  },
  {
      "_id": "456",
      "type": "BD",
      "name": "Ce nom de carte est beaucoup trop grand pour être affiché correctement dans la page Objet du site web de la librairie Jaune2",
      "link": "https://www.test.com/imagetest2.jpg",
      "description": "Ceci est un deuxième cas",
      "price": 2,
      "__v": 0
  }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objet  type="statuette" />, container);

  ///////////////////////////////
  //                           //
  //  Vérification des cartes  //
  //                           //
  ///////////////////////////////


    //Test du nom de la carte normal
    expect(container.querySelector("[data-testid='card-title']")[0].textContent).toEqual("Tintin au Tibet");
    
    //Test du nom de la carte inexistant
    expect(container.querySelector("[data-testid='card-title']")[1].textContent).toEqual("Nom Introuvable");

    //Test du nom de la carte trop long
    expect(container.querySelector("[data-testid='card-title']")[2].textContent).toEqual('Ce nom de carte est beaucoup trop grand pour être affiché correctement dans la page Objet du site...');

  
  
  global.fetch.mockRestore();
});




it("Lien vers la page Detail", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "BD",
      "name": "Tintin au Tibet",
      "link": "https://www.test.com/imagetest1.jpg",
      "description": "Ceci est un cas",
      "price": 1,
      "__v": 0
  },
  {
      "_id": "|{@[[^{#^{[",
      "type": "BD",
      "name": "Tintin chez Mémé",
      "link": "https://www.test.com/imagetest2.jpg",
      "description": "Ceci est un deuxième cas",
      "price": 2,
      "__v": 0
  },
  {
    "_id": "",
    "type": "BD",
    "name": "Tintin au Tibet",
    "link": "https://www.test.com/imagetest1.jpg",
    "description": "Ceci est un cas",
    "price": 1,
    "__v": 0
},
{
  "_id": "-123",
  "type": "BD",
  "name": "Tintin au Tibet",
  "link": "https://www.test.com/imagetest1.jpg",
  "description": "Ceci est un cas",
  "price": 1,
  "__v": 0
}

];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objet  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////


  //Test du lien lorsqu'il y a un ID correcte
  expect(container.querySelector("[data-testid='card-link']")[0].getAttribute("href")).toEqual("/details/objets/123");
    
  //Test du lien lorsque l'ID est une chaine de caractère
  expect(container.querySelector("[data-testid='card-link']")[1].getAttribute("href")).toEqual("/PageNotFound");
 
  //Test du lien lorsqu'il n'y a pas d'ID
  expect(container.querySelector("[data-testid='card-link']")[2].getAttribute("href")).toEqual("/PageNotFound");
     
  //Test du lien lorsque l'ID est un nombre négatif
  expect(container.querySelector("[data-testid='card-link']")[3].getAttribute("href")).toEqual("/PageNotFound");
     

  
  
  global.fetch.mockRestore();
});




it("Image de la carte Objet", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "BD",
      "name": "Tintin au Tibet",
      "link": "https://www.test.com/imagetest1.jpg",
      "description": "Ceci est un cas",
      "price": 1,
      "__v": 0
  },
  {
      "_id": "456",
      "type": "BD",
      "name": "Tintin chez Mémé",
      "link": "ttps://www.test.com/imagetest2.jpg",
      "description": "Ceci est un deuxième cas",
      "price": 2,
      "__v": 0
  },
  {
    "_id": "123",
    "type": "BD",
    "name": "Tintin au Tibet",
    "link": "",
    "description": "Ceci est un cas",
    "price": 1,
    "__v": 0
},
{
  "_id": "123",
  "type": "BD",
  "name": "Tintin au Tibet",
  "link": "www.test.com",
  "description": "Ceci est un cas",
  "price": 1,
  "__v": 0
},
{
  "_id": "123",
  "type": "BD",
  "name": "Tintin au Tibet",
  "link": "https://www.test.com/imagetest1.jg",
  "description": "Ceci est un cas",
  "price": 1,
  "__v": 0
}
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objet  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////


  //Test du lien de l'image
  expect(container.querySelector("[data-testid='card-img']")[0].getAttribute("src")).toEqual("https://www.test.com/imagetest1.jpg");
  
  //Test du lien de l'image lorsque https est mal écrit
  expect(container.querySelector("[data-testid='card-img']")[1].getAttribute("src")).toEqual("imageNotFound");
  
  //Test du lien de l'image lorsqu'il n'y a pas de lien
  expect(container.querySelector("[data-testid='card-img']")[2].getAttribute("src")).toEqual("imageNotFound");
  
  //Test du lien de l'image lorsqu'il manque le https et l'extension
  expect(container.querySelector("[data-testid='card-img']")[3].getAttribute("src")).toEqual("imageNotFound");
  
  //Test du lien de l'image lorsque l'extension est mal écrite
  expect(container.querySelector("[data-testid='card-img']")[4].getAttribute("src")).toEqual("imageNotFound");
  
  
  global.fetch.mockRestore();
});


it("Prix de la carte Objet", async () => {

  const fakeResponse = [
   {
      "_id": "123",
      "type": "BD",
      "name": "Tintin au Tibet",
      "link": "https://www.test.com/imagetest1.jpg",
      "description": "Ceci est un cas",
      "price": 1,
      "__v": 0
  },
  {
      "_id": "456",
      "type": "BD",
      "name": "Tintin chez Mémé",
      "link": "https://www.test.com/imagetest2.jpg",
      "description": "Ceci est un deuxième cas",
      "price": 0,
      "__v": 0
  }, 
  {
    "_id": "123",
    "type": "BD",
    "name": "Tintin au Tibet",
    "link": "https://www.test.com/imagetest1.jpg",
    "description": "Ceci est un cas",
    "price": -10.5,
    "__v": 0
  }, 
  {
    "_id": "123",
    "type": "BD",
    "name": "Tintin au Tibet",
    "link": "https://www.test.com/imagetest1.jpg",
    "description": "Ceci est un cas",
    "price": -1,
    "__v": 0
  }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objet  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////


  //Test du prix de la carte
  expect(container.querySelector("[data-testid='card-text']")[0].textContent).toEqual("1€");  
  
  //Test du prix de la carte losqu'il est égale à 0
  expect(container.querySelector("[data-testid='card-text']")[1].textContent).toEqual("Prix indisponible");  
  
  //Test du prix de la carte lorsqu'il est un nombre à virgule négatif 
  expect(container.querySelector("[data-testid='card-text']")[2].textContent).toEqual("Prix indisponible");  
    
  //Test du prix de la carte lorsqu'il est négatif
  expect(container.querySelector("[data-testid='card-text']")[3].textContent).toEqual("Prix indisponible");  
  
  
  global.fetch.mockRestore();
});