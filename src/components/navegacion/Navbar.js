import React from 'react';
import { Link } from 'react-router-dom'
import 'boxicons';
import Carrito from '../paginas/Carrito';
import Cartwidget from '../Cartwidget';



export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link to='/' className="navbar-brand"> <img src='./logo2.png' width='210'/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/productos'>Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contacto'>Contacto</Link>
        </li>
        <li className="nav-item cart">
          <Link className="nav-link "  to='/carrito'><Cartwidget/></Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}


