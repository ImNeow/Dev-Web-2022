import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import {Objets} from "../../src/Pages/Objets";


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

it("Affichage des cartes dans une configuration normale de la page Objets", async () => {

  const fakeResponse = [
    {
        "_id": "123",
        "type": "statuette",
        "name": "The Mandalorian",
        "link": "https://www.test.com/imagetest1.jpg",
        "description": "Ceci est un cas",
        "price": 1,
        "__v": 0
    },
    {
        "_id": "456",
        "type": "statuette",
        "name": "Dragon Ball Z Sangoku",
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

  
  render(<Objets type="statuette" />, container);
  
  ////////////////////////////////
  //                            //
  //  Vérification des cartes   //
  //                            //
  ////////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/objets/"+fakeResponse[i]._id);
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse[i].link);

    //Test du nom de la carte 
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual(fakeResponse[i].name);

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});



it("Affichage du nom des cartes inexistant", async () => {

  const fakeResponse = [
    {
        "_id": "123",
        "type": "statuette",
        "name": "",
        "link": "https://www.test.com/imagetest.jpg",
        "description": "Ceci est un cas",
        "price": 1,
        "__v": 0
    },
    {
        "_id": "456",
        "type": "statuette",
        "name": "",
        "link": "https://www.test.com/imagetest2.jpg",
        "description": "Ceci n'est pas un test",
        "price": 2,
        "__v": 0
    }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objets  type="statuette" />, container);

  ///////////////////////////////
  //                           //
  //  Vérification des cartes  //
  //                           //
  ///////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/objets/"+fakeResponse[i]._id);
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse[i].link);

    //Test du nom de la carte
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual("Nom Introuvable");

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});


it("Affichage du nom des cartes trop grand", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "statuette",
      "name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "link": "http://lienquiexiste.com/pic.jpg",
      "description": "ceci est une description ",
      "price": 100,
      "__v": 0
  },
  {
    "_id": "345",
    "type": "statuette",
    "name": "Ce nom de carte est beaucoup trop grand pour être affiché correctement dans la page Objet du site web de la librairie Jaune2",
    "link": "http://lienquiexiste.com/pic2.jpg",
    "description": "ceci est une description 2 ",
    "price": 101,
    "__v": 0
  }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objets  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/objets/"+fakeResponse[i]._id);
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse[i].link);

    //Test du nom de la carte
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual( fakeResponse.name.slice(0,97)+'...' );

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});


it("Lien vers la page Detail", async () => {

  const fakeResponse = [
    {
      "_id": "-123",
      "type": "statuette",
      "name": "Nom correct",
      "link": "http://lienquiexiste.com/pic.jpg",
      "description": "ceci est une description ",
      "price": 100,
      "__v": 0
  },
  {
    "_id": "{@|{#[^{[^[^",
    "type": "statuette",
    "name": "Objet au pif",
    "link": "http://lienquiexiste.com/pic2.jpg",
    "description": "ceci est une description 2 ",
    "price": 101,
    "__v": 0
  },{
    "_id": "idquinexistepas",
    "type": "statuette",
    "name": "Objet au pif 2",
    "link": "http://lienquiexiste.com/pic3.jpg",
    "description": "ceci est une description 3 ",
    "price": 103,
    "__v": 0
  }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objets  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/PageNotFound");
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse[i].link);

    //Test du nom de la carte
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual( fakeResponse[i].name );

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});




it("Image de la carte Objet", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "statuette",
      "name": "Nom correct",
      "link": "ttp://lienquiexiste.com/pic.jpg",
      "description": "ceci est une description ",
      "price": 100,
      "__v": 0
  },
  {
    "_id": "456",
    "type": "statuette",
    "name": "Objet au pif",
    "link": "lienquinexiste.com",
    "description": "ceci est une description 2 ",
    "price": 101,
    "__v": 0
  },
  {
    "_id": "786",
    "type": "statuette",
    "name": "Objet au pif 2",
    "link": "",
    "description": "ceci est une description 3 ",
    "price": 103,
    "__v": 0
  }
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objets  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/objets/"+fakeResponse[i]._id);
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual("imageNotFound");

    //Test du nom de la carte
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual( fakeResponse[i].name);

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual(fakeResponse[i].price);  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});


it("Prix de la carte Objet", async () => {

  const fakeResponse = [
    {
      "_id": "123",
      "type": "statuette",
      "name": "Nom correct",
      "link": "https://lienquiexiste.com/pic.jpg",
      "description": "ceci est une description ",
      "price": -100,
      "__v": 0
  },
  {
    "_id": "456",
    "type": "statuette",
    "name": "Objet au pif",
    "link": "https://lienexiste.com/pic3.jpg",
    "description": "ceci est une description 2 ",
    "price": 0,
    "__v": 0
  },
  {
    "_id": "123",
    "type": "statuette",
    "name": "Nom correct",
    "link": "https://lienquiexiste.com/pic2.jpg",
    "description": "ceci est une description ",
    "price": -10.5,
    "__v": 0
},
];

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  
  render(<Objets  type="statuette" />, container);

  //////////////////////////////
  //                          //
  //  Vérification des cartes //
  //                          //
  //////////////////////////////

  for(let i=0;i<fakeResponse.length;i++){

    //Test du lien 
    expect(container.querySelector("[data-testid='card-link']")[i].getAttribute("href")).toEqual("/detail/objets/"+fakeResponse[i]._id);
    
    //Test de la clé de la carte 
    expect(container.querySelector("[data-testid='card']")[i].getAttribute("key")).toEqual(fakeResponse[i]._id);
    
    //Test du lien de l'image
    expect(container.querySelector("[data-testid='card-img']")[i].getAttribute("src")).toEqual(fakeResponse.link);

    //Test du nom de la carte
    expect(container.querySelector("[data-testid='card-title']")[i].textContent).toEqual( fakeResponse[i].name );

    //Test du prix de la carte
    expect(container.querySelector("[data-testid='card-text']")[i].textContent).toEqual("Prix indisponible");  

    
    // Vérification de la variable Type 
    expect(fakeResponse[i].type).toEqual("statuette");
  }

  
  
  global.fetch.mockRestore();
});