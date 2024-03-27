import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes';

import Menu from './pages/Menu';

import './styles/index.scss';
import Calory from './pages/Calory';
import Register from './pages/Register';

import Login from './components/Login';
import Signup from './components/Signup';
import Setting from './pages/Setting';
import RecipeProvider from './context/RecipeProvider';





function App() {







  return (
    <RecipeProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/setting" element={<Setting />} />
            {/* Bu kısımda Menu bileşenine meal ve fetchData prop'larını geçirin */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/calory" element={<Calory />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Home sayfasında Footer göstermek için bu şekilde bir yöntem kullanabilirsiniz */}
            <Route path="/" element={

              <>
                <Home />

              </>
            }
            />

          </Routes>
        </div>
      </Router>
    </RecipeProvider>

  );
}

export default App;
