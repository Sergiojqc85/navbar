
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Servicios from './components/paginas/Servicios';
import Contacto from './components/paginas/Contacto';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>        
          <Route exact path='/'> component={Inicio}</Route> 
          <Route path='/Servicios'> component={Servicios}</Route>
          <Route path='/Contacto'> component={Contacto}</Route>
        </Routes>
      </Router>


    </div>
  );
}
export default App;
