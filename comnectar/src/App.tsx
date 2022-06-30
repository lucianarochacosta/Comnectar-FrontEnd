import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App;
