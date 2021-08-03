import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Main'
import ProductList from './ProductList/Main'
import ProductDesc from './ProductDesc/Main';
import Cart from './Cart/Main';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/productlist" component={ProductList}/>
        <Route exact path="/productdesc" component={ProductDesc}/>
        <Route exact path="/cart" component={Cart}/>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
