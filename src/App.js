//import logo from './logo.svg';
//import './App.css';


import AppForm from "./components/AppForm";

function App() {
  return (
    <div style={{background:"yellow", 
    width:"350px", 
    padding:"10px"}}>
      <AppForm/>
      <i class="large material-icons">child_care</i>

      <p class="text-dark">1. juan manuel 23 masculino ----  x  - A</p>
      <p class="text-dark">2. rosa maria 28 Femenino  ------ x  - A</p>
      <p class="text-dark">3. bryan david 30 masculino ----  x  - A</p>
    </div>
  );
}

export default App;