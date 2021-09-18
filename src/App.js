import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hero2 from './components/Hero2';
import Services from './components/Services'
import Feature from './components/Hero3';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Hero />
      <Hero2 />
      <Services />
      <Feature />
      </Router>
    </>
  );
}

export default App;
