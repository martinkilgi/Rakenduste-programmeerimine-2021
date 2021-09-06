import logo from './logo.svg';
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import AddItem from './pages/AddItem.js'
import {Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
     <Route path="/" exact>
        <Home />
     </Route>
     <Route path="/cart">
        <Cart />
     </Route>
     <Route path="/additem">
        <AddItem />
     </Route>
    </div>
  );
}

export default App;
