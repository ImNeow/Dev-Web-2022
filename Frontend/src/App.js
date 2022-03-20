import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Media from 'react-media';

import CustomNavBar from './Components/CustomNavBar';
import CustomFooter from './Components/CustomFooter';

import Accueil from './Pages/Accueil';
import Curiosite from './Pages/Curiosite';
import Propos from './Pages/Propos';
import Contact from './Pages/Contact';
import Bedetheque from './Pages/Bedetheque';
import Objets from './Pages/Objets';
import Connect  from './Pages/Connect'
import Registration from './Pages/Registration';
import CGV from './Pages/CGV'
import NotFound from './Pages/NotFound';
import Detail from './Pages/Detail';

import marsup from './Assets/Images/marsupilami-down.png'

function App() {


  return<>
  <CustomNavBar/>
  <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<img className='anim' src={marsup} ></img>)}/>
  <Container className='content'>
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil/>}/>

        <Route path="bedetheque/BD" element={<Bedetheque type="BD"/>}/>
        <Route path="bedetheque/Manga" element={<Bedetheque type="Manga"/>}/>
        <Route path="bedetheque/Comic" element={<Bedetheque type="Comic"/>}/>
        <Route path="bedetheque/occasion" element={<Bedetheque type="Occasion"/>}/>

        <Route path="/detail" element={<Detail/>}/>

        <Route path="/objets/statuette" element={<Objets type="statuette"/>}/>
        <Route path="/objets/poster" element={<Objets type="poster"/>}/>
        <Route path="/objets/montre" element={<Objets type="montre"/>}/>
        <Route path="/objets/vaiselle" element={<Objets type="vaiselle"/>}/>
        <Route path="/objets/jeudecarte" element={<Objets type="jeudecarte"/>}/>
        <Route path="/objets/cartepostale" element={<Objets type="cartepostal"/>}/>
        <Route path="/objets/gadget" element={<Objets type="gadget"/>}/>

        <Route path="/curiosite" element={<Curiosite/>}/>
        <Route path="/propos" element={<Propos/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/account" element={<Connect/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/cgv" element={<CGV/>}/>
        <Route path="/PageNotFound" element={<NotFound/>}></Route>
        <Route
        path="/"
        element={<Navigate to="/accueil" />}
        />
        <Route
        path="*"
        element={<Navigate to="/PageNotFound" />}
        />
      </Routes>
    </BrowserRouter>
  </Container>
  <CustomFooter/>

  </>
  ;  
}

export default App;

 