import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Plats from './Pages/Plats/Plats';
import Boissons from './Pages/Boissons/Boissons';
import Contact from './Pages/Contact/Contact';

const Routeur = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/plats' element={<Plats />} />
                    <Route path='/boissons' element={<Boissons />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
};

export default Routeur;