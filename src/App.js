import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Farm from './components/Farm';
import Fruit from './components/Fruit';
import Vegetable from './components/Vegetable'
import Tp from './components/Tp';
import Quote from './components/Quote';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        
          <Switch>
            <Route exact path="/">
            <Landing/>
            </Route>
            <Route exact path="/login">
             
              <Login  />
            </Route>
             <Route exact path="/signup">
             
              <Signup/>
            </Route>
            <Route exact path="/products">
              <Product/>
            </Route>
            <Route exact path="/fruit">
           
              <Fruit/>
            </Route>
            <Route exact path="/vegetable">
           
              <Vegetable/>
            </Route>
             <Route exact path="/quote">
           
              <Quote/>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
