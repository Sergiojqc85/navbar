
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Productos from './components/paginas/Productos';
import Contacto from './components/paginas/Contacto';
import Carrito from './components/paginas/Carrito';





function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/'>
            <Route index element={<Inicio/>}/>
          </Route>    
          <Route path='/productos'>
            <Route  index element={<Productos/>}/>
          </Route> 
          <Route path='/contacto'>
            <Route index element={<Contacto/>}/>
          </Route>    
          <Route path='/carrito'>
            <Route index element={<Carrito/>}/>
          </Route>           
        </Routes>
        
      </BrowserRouter>
      
      
    </div>
    
    
  );
}
export default App;
