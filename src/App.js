import logo from './logo.svg';
//import { collection, getDocs, query, doc, deleteDoc, where, onSnapshot } from 'firebase/firestore';
//import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // as = que el nombre se llamara router
import Dashboard from './public/Dashboard';
import Home from './public/Home';
//import PublicRutas from './ruteo/PublicRutas';
import { useAuth } from './ruteo/AuthContext';
//import ProtectedRutas from './ruteo/ProtectedRutas';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
//import Appform from './components/AppForm';
//import C01componente from './components/C01componente';
//import Variable from './components/C04variable';
//import MatrizOperaciones from './components/P7matrizOperaciones';
//import { db } from "./firebase/firebase";


function App() {
  const { user } = useAuth ();


  return (
    <div style={{background:"plum"}}>
      <Router>
        {user ? <BarraRutasProtected/> : <BarraRutasPublic/> }
          
        
      </Router>
      
    </div>
  );
}

export default App;