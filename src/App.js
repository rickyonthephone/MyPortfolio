
import {Switch, BrowserRouter as Router, Link, Route} from "react-router-dom";
import MyNavbar from './components/Navbar/MyNavbar';
import AboutMe from './pages/Landing/AboutMe';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
  <div>
    <Router>
      <div className="App">
        <MyNavbar />
      </div>
      <div>
        <Route exact path="/">
          <AboutMe />
        </Route>

        {/* <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route> */}

        <Route path='*'>
          <AboutMe />
        </Route>

      </div>
    </Router>
    <div className='bottomNav'>
      <Footer />
    </div>
  </div>
  );
}

export default App;
