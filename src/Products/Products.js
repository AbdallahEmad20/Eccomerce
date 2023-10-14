import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../rtk/ProductSlice';
import { Link } from 'react-router-dom';
import { Col, Container  , Row} from 'react-bootstrap';
import Product from '../Product/Product';

import "./Products.css"
const Products = () => {
 const {arr} =useSelector(state=>state.Productt)
const dispatch =useDispatch()
useEffect(()=>{
 dispatch(fetchProduct())
},[])
  return (
    <div>
      
<Product/>
    </div>
  )
}

export default Products



