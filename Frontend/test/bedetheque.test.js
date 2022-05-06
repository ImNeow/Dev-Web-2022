import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import {Bedetheque} from "../src/Pages/Bedetheque";


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

it("Affichage des cartes dans une configuration normale de la page Bedetheque", async () => {

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
        "price": 2,
        "__v": 0
    },
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Bedetheque  type="BD" />, container);

  ////////////////////////////////
  //                            //
  //  Vérification des cartes   //
  //                            //
  ////////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/books/123");
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse[i].link);

    //Test du nom de la carte 
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual(fakeResponse[i].name);

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("BD");
  }

  
  
  global.fetch.mockRestore();
});



it("Affichage des cartes dans une configuration anormale de la page Bedetheque", async () => {

  const fakeResponse = [
    {
        "_id": "-123",
        "type": "BD",
        "name": "",
        "link": "lien-non-valide.jpg",
        "description": "Ceci est un cas",
        "price": -1,
        "__v": 0
    },
    {
        "_id": "#@|@|{[#[{#",
        "type": "BD",
        "name": "",
        "link": "",
        "description": "Ceci est un deuxième cas",
        "price": -2,
        "__v": 0
    },
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );


  render(<Bedetheque  type="BD" />, container);

  /////////////////////////////////////////
  //                                     //
  //  Vérification des cartes invalides  //
  //                                     //
  /////////////////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/PageNotFound");
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual("imageNotFound");

    //Test du nom de la 
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual("Nom Introuvable");

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual("Prix indisponible");  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("BD");
  }

  
  
  global.fetch.mockRestore();
});