import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MoreDetails.css"



const MoreDetails = ({products}) => {

 



    const settings = {
    //   dots: false,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
  
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed:3000,
    arrows: false,


    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         initialSlide: 2,
         autoplay: true,

        }
      },

      // {
      //   breakpoint: 770,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //     initialSlide: 2
      //   }
      // },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
  }
  






  return (


    <div className='pro'>



    <Container>

    


    <Slider  {...settings}>

{

      products.map((product) =>(




<div key={product.id} className='product'>
    
    
    <div className='divImage'>
     <img src={product.images[0]} />
     <div className='overlay'>
     <Link to={`products/${product.id}`}>View Product</Link>
     </div>
    </div>
    <p>{product.brand} {product.category}</p>
    <p>{product.title}</p>
    <div className='d-flex justify-content-center content-pro'>
     <p style={{fontSize:"14px" , textDecoration:"line-through" ,marginRight:"4px"}}>${product.stock}</p>
     <p style={{fontSize:"15px" , fontWeight:"bold"}}>{product.price}$</p>
     <p style={{  fontWeight:"500" , marginLeft:"4px"}}>( {product.discountPercentage}% off)</p>
    </div>
    
    
    </div>





 
    ))


      }

</Slider>

 
        



 

  
    </Container>
    
    
 
      
        </div>


  )
}

export default MoreDetails
