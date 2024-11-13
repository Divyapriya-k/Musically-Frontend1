import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Playlist from './Pages/Playlist';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;