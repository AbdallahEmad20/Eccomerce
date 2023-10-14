import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { ProDetails } from '../rtk/ProductSlice'
import { Container , Col , Row } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import Navvbar from "../Navvbar/Navvbar"
import { LuListTree } from 'react-icons/lu'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./productDetails.css"
import Footer from '../Footer/Footer'
import { addToCart } from '../rtk/CartSlice'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductDetails = () => {


  const notify = (detail) => {
  dispatch(addToCart(detail))
    
    toast.success("Add To Cart Process", {
      position: toast.POSITION.LEFT_CENTER,
            
    });


  };





    const {detail} =useSelector(state=>state.Productt)
    console.log("detail" , detail)
    const dispatch =useDispatch()
    const params =useParams()

    useEffect(()=>{
    dispatch(ProDetails(params.myid))
    },[])

    const images = [
     `${ detail.images&&detail.images[0]}`,
     `${ detail.images&&detail.images[1]}`,
     `${ detail.images&&detail.images[2]}`,
     `${ detail.images&&detail.images[3]}`,
      
        ];
      

// function AddToCartButton(detail){
//   notify();
    
// }

    // console.log(params)
  return (
    <div className='productDetails'>
    <Navvbar/>


          <ToastContainer className="Tost" />


    <Container className='ContainerProductDetail' >

<Row>
  <Col className='Div1'  lg={5} md={6} sm={12} >



  <div className="box">
    <Carousel useKeyboardArrows={true}>
      {images.map((URL, index) => (
        <div className="slide">
          <img alt="sample_file" src={URL} key={index} />
        </div>
      ))}
    </Carousel>
  </div>




{/*   
  <div  className='ImageDiv' >
<img className='special' src={  detail.images&&detail.images[0]} />

<div className='Images'>


  
  <div className='imageINBOX'>
<img src={  detail.images&&detail.images[1]} />
  </div> 

  <div className='imageINBOX'>
<img src={  detail.images&&detail.images[2]} />
  </div> 


  <div className='imageINBOX'>
<img src={  detail.images&&detail.images[3]} />
  </div> 
</div>
</div> */}
  
  

  </Col>




<Col className='content-div' lg={7} md={6} sm={12}>

<div className='contentSec'>

<h4 style={{fontSize:"20px"}}>{detail.title}</h4>
<p style={{color:"#7f7f7f" , fontSize:"17px" , marginTop:"25px"}}>Fine quality Branded Product Keep in a cool and dry place</p>

<div className="Product-Details">

<div className='d-flex DetailContent'>
  <h5>Rating :</h5>
  <h5>{detail.rating}</h5>
</div>


</div>



<div className='priceDiv'>
<span className='d-flex' > <h6 style={{textDecoration:"line-through"  , fontSize:"20px"}}>${detail.stock} </h6>  <p style={{marginLeft:"10px" , fontWeight:"400" , fontSize:"20px" }}>(inclusive of all taxes)</p></span>

<div className='divaiaa d-flex'>
<p style={{fontSize:"25px" , fontWeight:"bold" , color:"gold"}}>${detail.price} </p> 
<p className='p'>{detail.discountPercentage}% off</p>
</div>

</div>

<div className='Quantity'>
  <h5>Quantity: </h5>

  <button><AiOutlineMinus/></button>

<h6>2</h6>
<button ><AiOutlinePlus/></button>

</div>


<div className='btns'>

<button className='btnAddCart' onClick={ ()=>notify(detail)} ><AiOutlineShoppingCart className='iconia'/> addToCart</button>
  <button className='btnBuy'> <Link to='/cart' style={{color:"#fff" , textDecoration:"none"}}>View Cart</Link></button>

</div>
</div>



</Col>

</Row>
</Container>



<Footer/>



    </div>
  )
}

export default ProductDetails
