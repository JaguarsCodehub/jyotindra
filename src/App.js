import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';
import airbnb from './pages/airbnb';
import DisnepPage from './pages/disnep';
import NetflixPage from './pages/netflix';
import AnimePage from './pages/anime';
import PlaygroundPage from './pages/playground'
import ConnectPage from './pages/connect';
import ResumePage from './pages/resume';
import ProcessPage from './pages/process';


function App() {


  

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/airbnb" component={airbnb} exact/>
          <Route path="/disnep" component={DisnepPage} exact/>
          <Route path="/netflix" component={NetflixPage} exact/>
          <Route path="/anime" component={AnimePage} exact/>
          <Route path="/playground" component={PlaygroundPage} exact/>
          <Route path="/connect" component={ConnectPage} exact/>
          <Route path="/resume" component={ResumePage} exact/>
          <Route path="/process" component={ProcessPage} exact/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
