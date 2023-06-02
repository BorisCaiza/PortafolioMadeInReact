import logo from './logo.svg';
import './App.css';
import Inicio from './Pages/Inicio';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
     <Inicio/>
     <Footer/>
    </div>
  );
}

export default App;
