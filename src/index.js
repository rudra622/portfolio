import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './component/Header';
import Banner from './component/Banner/Banner';
import About from './component/About/About';
import Facts from './component/Facts/Facts';
import Skills from './component/Skills/Skills';
import Resume from './component/Resume/Resume';
import Protfolio from './component/Protfolio/Protfolio';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './component/main-index/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Banner' element={<Banner/> } />
        <Route path='/About' element={<About/> } />
        <Route path='/Facts' element={<Facts/> } />
        <Route path='/Skills' element={<Skills/> } />
        <Route path='/Resume' element={<Resume/> } />
        <Route path='/Protfolio' element={<Protfolio/> } />
        <Route path='/Services' element={<Services/> } />
        <Route path='/Contact' element={<Contact/> } />
      </Routes>
    </BrowserRouter>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
