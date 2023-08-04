import { Route, Router } from 'react-router-dom';
import Home from './pages/home';
import React from "react";
import Store from "./components/Store";
import './App.css';


const App = () => {

  return (
    <Router>
      <Route path= '/' Component={Home}/>
      <Route path= '/Store' element={<Store/>} />  
    </Router>
    // <div className="App">
    //   <Store />
    // </div>
  );
}

export default App;
