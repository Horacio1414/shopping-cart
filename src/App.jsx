import { useContext } from "react";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import {products as InitialProducts} from "./mocks/products.json"

import { useFilters } from "./components/hooks/useFilters";



function App() {
 
  
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(InitialProducts)
  return (
    <>
    <Header/>
      <h1>Shopping Cart</h1>
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
