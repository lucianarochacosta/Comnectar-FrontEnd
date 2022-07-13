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
import RegistroProduto from './paginas/registroProduto/RegistroProduto';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';


import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import DeletaCategoria from './components/categorias/deletaCategoria/DeletaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import { ThemeProvider } from '@material-ui/core';
import Theme from './theme/Theme';
import CompraProduto from './paginas/compraProduto/CompraProduto';


function App() {
  return (
    <Provider store={store}>
       <ThemeProvider theme={Theme}>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos/>} />
            <Route path="/produtos" element={<CompraProduto />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletaCategoria />} />
            <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
            <Route path="/registroProduto" element={<RegistroProduto />} />
            <Route path="/atualizarProduto/:id" element={<CadastroProduto />} />
            <Route path="/deletaproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
