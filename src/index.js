import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import "./Style/css/Main.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/js/bootstrap.bundle"
import Headphones from './Pages/HeadphonesPage';
import Home from './Pages/HomePage';
import Laptops from './Pages/LaptopsPage';
import Mobiles from './Pages/MobilesPage';
import TV from './Pages/TVPage';
import { AppProvider } from './Components/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="laptop" element={<Laptops/>}/>
      <Route path="mobiles" element={<Mobiles/>}/>
      <Route path="tv" element={<TV/>}/>
      <Route path="headphones" element={<Headphones/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </AppProvider>
);
