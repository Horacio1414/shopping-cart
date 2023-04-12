import { useContext } from "react";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import {products as InitialProducts} from "./mocks/products.json"

import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart";
import { Cart } from "./components/Cart";



function App() {
 
  
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(InitialProducts)
  return (
    <CartProvider>
     
    <Header/>
    <Cart />
      <h1>Shopping Cart</h1>
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
