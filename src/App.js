import React from 'react'
import Product from '../src/Product/Product'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails/ProductDetails'
import Home from './Home/Home'
import Products from './Products/Products'
import Cart from './Cart/Cart'
import SeeOurCato from './SeeOurCate/SeeOurCato'
import Formaia from './components/forms/Formaia'


const App = () => {
 

  return (
    <div>
      
      <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/cart'element={<Cart/>}></Route>
      <Route path='/formaia'element={<Formaia/>}></Route>

        <Route path='products/:myid'element={<ProductDetails/>}></Route>
{/* <Route path='/seeOurCato'element={<SeeOurCato/>}></Route> */}
      </Routes>
    
    
    </div>
  )


}

export default App
