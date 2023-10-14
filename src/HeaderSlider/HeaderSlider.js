import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import "./HeaderSlider.css"
const HeaderSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        arrows: false,
      
      };

  return (
    <div className='Slider'>

{/* <Container> */}


<div className='slider-content'>
<Slider className='sli' {...settings}>
   
  

   <div className='slider-item '>  
          <img width={"100%"} src='/Images/slider-img-1.png'/>
      
          </div>
          
          <div  className='slider-item'>  
 <img  width={"100%"}src='/Images/slider-img-2.png'/>
      
          </div>
          

          
   <div className='slider-item '>  
          <img width={"100%"} src='/Images/slider-img-3.png'/>
      
          </div>


        </Slider>

        </div>

        {/* </Container> */}

      
    </div>
  )
}

export default HeaderSlider
