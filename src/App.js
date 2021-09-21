import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';
import airbnb from './pages/airbnb';
import DisnepPage from './pages/disnep';
import NetflixPage from './pages/netflix';



function App() {


  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/airbnb" component={airbnb} exact/>
          <Route path="/disnep" component={DisnepPage} exact/>
          <Route path="/netflix" component={NetflixPage} exact/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
