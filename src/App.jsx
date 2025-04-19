import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // React Router v5 imports
import { useState } from 'react';

import Header from './components/navigation/Header.jsx';
import Footer from './components/navigation/Footer.jsx';
import Sidebar from './components/navigation/Sidebar'; 
import HomePage from './components/pages/HomePage.jsx';
import Hero from './components/pages/HeroPage.jsx';
import Cart from './components/pages/Cart.jsx';
import Contact from './components/pages/Contact.jsx';
import AllProducts from "./components/products/AllProducts.jsx";
import ProductFilter from './components/products/product page components/ProductFilter.jsx';
import SortProduct from './components/products/product page components/SortProduct.jsx';
import ProductPage from './components/products/product page components/Product.jsx';
import MensClothing from './components/products/MensClothing';
import WomensClothing from './components/products/WomensClothing';
import Electronics from './components/products/Electronics';
import Jewelry from './components/products/Jewelry';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="main-content">
          {/* <Sidebar /> */}
          <Switch> {/* Use Switch to wrap Routes */}
            <Route exact path="/" component={HomePage} />
            <Route path="/hero" component={Hero} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" component={AllProducts} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/products/men" component={MensClothing} />
            <Route path="/products/women" component={WomensClothing} />
            <Route path="/products/electronics" component={Electronics} />
            <Route path="/products/jewelry" component={Jewelry} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
