import logo from './logo.svg';
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import AddItem from './pages/AddItem.js'
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import AddCategory from './pages/AddCategory';
import CategoryList from './components/CategoryList';
import Categories from './pages/Categories';
import Items from './pages/Items';


function App() {
  return (
    <div>
      <Navbar/>
     <Route path="/" exact>
        <Home />
     </Route>
     <Route path="/cart">
        <Cart />
     </Route>
     <Route path="/additem">
        <AddItem />
     </Route>
     <Route path="/addcategory">
        <AddCategory />
     </Route>
     <Route path="/items">
        <Items />
     </Route>
     <Route path="/categories">
        <Categories />
     </Route>
    </div>
  );
}

export default App;
