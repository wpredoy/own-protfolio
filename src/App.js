import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Navbar from './Components/Home/Navbar/Navbar';

function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/about'>
            <AboutMe/>
          </Route>
          <Route path='/portfolio'>
            <Portfolio/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
