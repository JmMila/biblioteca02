import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';

//import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import Contacto from '../public/Contacto';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../login/RegisterForm';

const PublicRutas = () => {
  //const { user } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
  
  }

  return (
    <div style={{ background:"greenyellow", }}>
      <nav>
        <div id="login">
          <ul>
            <li><Link to="/nuevoregistro">Registrar</Link></li>

            <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li>
            <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
            
          </ul>
        </div>
        
        <div id="menu">
          <ul>
            <li><Link to="/home">Dashboard</Link> </li>
            <li><Link to="/home">Home</Link> </li>
            <li><Link to="/contacto">CONTACTO</Link> </li>
            <li><Link to="/Iniciarsesion">INICIAR SESION</Link> </li>
            <li><Link to="/registrar">REGISTRAR</Link> </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/Iniciarsesion' element={<LoginForm />} />  

        <Route path='/' element={<Dashboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/registrar' element={<RegisterForm />} />
      </Routes> 
    </div>
  )
}

export default PublicRutas;

/*
{user ? (
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li> 
              ) : (
              <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
            )}
*/
