import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {CustomNavBar} from './Components/CustomNavBar';
import {CustomFooter} from './Components/CustomFooter';

import {Accueil} from './Pages/Accueil';
import {Account} from './Pages/Account';
import {Administration} from './Pages/Administration';
import {Curiosite} from './Pages/Curiosite';
import {Propos} from './Pages/Propos';
import {Contact} from './Pages/Contact';
import {Bedetheque} from './Pages/Bedetheque';
import {Objets} from './Pages/Objets';
import {Connect}  from './Pages/Connect'
import {Registration} from './Pages/Registration';
import {CGV} from './Pages/CGV'
import {NotFound} from './Pages/NotFound';
import {Detail} from './Pages/Detail';
import {Search} from './Pages/Search';


function App() {
  return<>
  <CustomNavBar/>
  <div className='content'>
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account/>}/>
        <Route path="/accueil" element={<Accueil/>}/>
        <Route path="/administration" element={<Administration/>}/>

        <Route path="/bedetheque/BD" element={<Bedetheque type="BD"/>}/>
        <Route path="/bedetheque/Manga" element={<Bedetheque type="Manga"/>}/>
        <Route path="/bedetheque/Comic" element={<Bedetheque type="Comic"/>}/>
        <Route path="/bedetheque/occasion" element={<Bedetheque type="Occasion"/>}/>

        <Route path="/objet/statuette" element={<Objets type="statuette"/>}/>
        <Route path="/objet/poster" element={<Objets type="poster"/>}/>
        <Route path="/objet/montre" element={<Objets type="montre"/>}/>
        <Route path="/objet/vaisselle" element={<Objets type="vaisselle"/>}/>
        <Route path="/objet/jeudecarte" element={<Objets type="jeudecarte"/>}/>
        <Route path="/objet/cartepostale" element={<Objets type="cartepostale"/>}/>
        <Route path="/objet/gadgets" element={<Objets type="gadgets"/>}/>

        <Route path="/curiosite" element={<Curiosite/>}/>

        <Route path="/detail/books/:id" element={<Detail type="books"/>}/>
        <Route path="/detail/objets/:id" element={<Detail type="objets"/>}/>
        <Route path="/detail/curiosite/:id" element={<Detail type="curiosite"/>}/>

        <Route path="/search/:name" element={<Search/>}/>
        <Route path="/propos" element={<Propos/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Connect/>}/>
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
  </div>
  <CustomFooter/>

  </>
  ;  
}

export {App};

 