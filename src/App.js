import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
   <div>
      <Router>
      <div className="App">
        <ul>
          <Link to="/">Home</Link>
          <br />
          <Link to ="/home">Home2</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/dashboard">Dashboard</Link>
        </ul>

        <hr />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          <Route path="/dashboard">

          </Route>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
   </div>
  )
};

export default App;
