
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import MyNavbar from './components/Navbar/MyNavbar';
import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
  <div className='App'>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/aboutme' component={AboutMe}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
  </div>
  )
}

export default App;
