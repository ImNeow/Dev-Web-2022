import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar';
import Accueil from './pages/Accueil';
import Curiosite from './pages/Curiosite';
import Propos from './pages/Propos';
import Contact from './pages/Contact';

function App() {
  return<>
  <CustomNavBar></CustomNavBar>
  <BrowserRouter>
    <Routes>
      <Route path="/accueil" element={<Accueil/>}/>
      <Route path="/curiosite" element={<Curiosite/>}/>
      <Route path="/propos" element={<Propos/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  
  </>
  ;  
}

export default App;
 