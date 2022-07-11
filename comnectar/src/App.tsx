import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
<<<<<<< HEAD
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import DeletaCategoria from './components/categorias/deletaCategoria/DeletaCategoria';
=======
import CadastroCategoria from './paginas/cadastroCategoria/CadastroCategoria';
>>>>>>> d4772f49a3f7380a949254fbdb14bdec9b7f98ef

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
<<<<<<< HEAD
          <Route path="/listacategoria" element={<ListaCategoria/>} />
          <Route path="/deletacategoria" element={<DeletaCategoria/>} />
=======
          <Route path="/cadastrocategoria" element={<CadastroCategoria/>} />
>>>>>>> d4772f49a3f7380a949254fbdb14bdec9b7f98ef
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
