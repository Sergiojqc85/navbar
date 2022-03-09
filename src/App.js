
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Servicios from './components/paginas/Servicios';
import Contacto from './components/paginas/Contacto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'>
            <Route index element={<Inicio/>}/>
          </Route>    
          <Route path='/servicios'>
            <Route  index element={<Servicios/>}/>
          </Route> 
          <Route path='/contacto'>
            <Route index element={<Contacto/>}/>
          </Route>     
          
          
        </Routes>
      </BrowserRouter>


    </div>
  );
}
export default App;
