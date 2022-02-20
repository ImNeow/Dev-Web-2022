import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import CustomNavBar from './components/CustomNavBar';

import Accueil from './pages/Accueil';
import Curiosite from './pages/Curiosite';
import Propos from './pages/Propos';
import Contact from './pages/Contact';
import Bedetheque from './pages/Bedetheque';
import Merchandising from './pages/Merchandising';
import Divers from './pages/Divers';

function App() {
  return<>
  <CustomNavBar></CustomNavBar>
  <Container className='content'>
  <BrowserRouter>
    <Routes>
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/bedetheque" element={<Bedetheque/>}/>
      <Route path="/merchandising" element={<Merchandising/>}/>
      <Route path="/divers" element={<Divers/>}/>
      <Route path="/curiosite" element={<Curiosite/>}/>
      <Route path="/propos" element={<Propos/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  </Container>
  </>
  ;  
}

export default App;

 