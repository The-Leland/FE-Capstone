import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage.jsx';
// import Sidebar from './components/navigation/Sidebar.jsx';
import Header from './components/navigation/Header.jsx';
// import Hero from './components/pages/Hero.jsx';
// import FeaturedCarousel from './components/pages/FeaturedCarousel.jsx';
import Footer from './components/navigation/Footer.jsx';
import Contact from './components/pages/Contact.jsx';
import Cart from './components/pages/Cart.jsx'
import AllProducts from "./components/products/AllProducts.jsx";
import ProductFilter from './components/products/product page components/ProductFilter.jsx';
import SortProduct from './components/products/product page components/SortProduct.jsx';



const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Sidebar/> */}
      <div className='main-content'>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        {/* <Route component={NotFoundPage} />  */}
        <Route path="/products" component={AllProducts} /> 
        <Route path="/product-filter" component={ProductFilter} />
        <Route path="/sort-product" component={SortProduct} />
      </Switch>
      <Footer/>
      </div>
    </div>
  );
};

export default App