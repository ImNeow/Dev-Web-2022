import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import CustomNavBar from './components/CustomNavBar';
import CustomFooter from './components/CustomFooter';

import Accueil from './pages/Accueil';
import Curiosite from './pages/Curiosite';
import Propos from './pages/Propos';
import Contact from './pages/Contact';
import Bedetheque from './pages/Bedetheque';
import Objets from './pages/Objets';
import Divers from './pages/Divers';
import Connect  from './pages/Connect'
import Registration from './pages/Registration';
import CGV from './pages/CGV'
import NotFound from './pages/NotFound';

function App() {
  return<>
  <CustomNavBar/>
  <Container className='content'>
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil/>}/>
        <Route path="/bedetheque" element={<Bedetheque/>}/>
        <Route path="/objets" element={<Objets/>}/>
        <Route path="/divers" element={<Divers/>}/>
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

 