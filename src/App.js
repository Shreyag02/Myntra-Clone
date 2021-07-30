import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Main'
import ProductList from './ProductList/Main'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/productlist" component={ProductList}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
