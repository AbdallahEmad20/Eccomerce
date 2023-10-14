import React, { useEffect } from 'react'
import { Col, Row, useAccordionButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { InfinitySpin } from  'react-loader-spinner'
import Pro from '../Products/Pro'
import { fetchCategoriesContent, fetchProduct } from '../rtk/ProductSlice'
import { Link } from 'react-router-dom'
import Navvbar from '../Navvbar/Navvbar'
import Footer from "../Footer/Footer"
import "./SeeOurProducts.css"
import Product from '../Product/Product'
import MoreDetails from '../MoreDetails/MoreDetails'
const SeeOurCato = () => {

    const { arr,CatoCon} =useSelector(state=>state.Productt)
    console.log( "CatoCon " , CatoCon)
     console.log("Arr", arr)
const dispatch =useDispatch()
    useEffect(()=>{
      dispatch((fetchCategoriesContent()))
     },[])


  return (
    <div>



{/* <Navvbar/> */}

<div>

<MoreDetails products={CatoCon} />

</div>
  


{/* <Footer/> */}
      
</div>
)
  }
export default SeeOurCato
