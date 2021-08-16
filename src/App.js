
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import MyNavbar from './components/Navbar/MyNavbar';
import './App.css';
import Home from './Pages/Home/Home'

function App() {
  return (
  <div className='App'>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
  </div>
  )
}

export default App;
