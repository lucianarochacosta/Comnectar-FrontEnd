import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

import { Provider } from 'react-redux';
import store from './store/store';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import CadastroProduto from './paginas/registroProduto/RegistroProduto';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
            <Route path="/cadastroProduto" element={<CadastroProduto/>} />
            <Route path="/cadastrocategoria" element={<CadastroCategoria/>} />
            <Route path="/atualizarProduto/:id" element={<CadastroProduto/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
