import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import DeletaCategoria from './components/categorias/deletaCategoria/DeletaCategoria';
import CadastroCategoria from './paginas/cadastroCategoria/CadastroCategoria';

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
            <Route path="/listacategoria" element={<ListaCategoria/>} />
          <Route path="/deletacategoria" element={<DeletaCategoria/>} />
          <Route path="/cadastrocategoria" element={<CadastroCategoria/>} />
            <Route path="/cadastroProduto" element={<CadastroProduto/>} />
            <Route path="/atualizarProduto/:id" element={<CadastroProduto/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
