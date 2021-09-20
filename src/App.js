import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';
import airbnb from './pages/airbnb';



function App() {


  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/airbnb" component={airbnb} exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
