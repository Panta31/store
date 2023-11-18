import { Route} from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import React from 'react';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import About from './pages/About/About';
import Login404 from './pages/Login404';
import Categori from './pages/Categori';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import FavouritePage from './pages/FavouritePage';
import ProductPage from './components/ProductPage/ProductPage';
import Terms from './pages/Terms';
class App extends React.Component {
  constructor(){
    super();
    this.state={}
  }

  
  render(){
    console.log(this.props);
  return (
    <div className="App">

         

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route  path="/login" component={ Login } />
            <Route  path="/about" component={ About } />
            <Route  path='/Categori/:categoryName' component={ Categori } />
            <Route  path='/Cart' component={ ShoppingCart } />
            <Route  path='/Favourite' component={ FavouritePage } />
            <Route  path='/Product/:id' component={ ProductPage } />
            <Route  path='/termsAndConditions' component={ Terms } />
            <Route  path="*" component={ Login404 } />
          
          </Switch>
          
    
       
    
      
    </div>
  );
}
}

export default App;