import React, { useEffect, useState } from 'react'
import "./Product.css"
import { Col, Container , Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SeeOurCato from '../SeeOurCate/SeeOurCato'
import { AiOutlineSearch } from 'react-icons/ai';

const Product = ({pro}) => {
  const [query , setQyery] =useState("")


  return (


    
    <div className='pro'>



    <Container >
    
<Col>

    
<form className = "formaia">
                <input type = "search" placeholder='Search here ...' onChange={(e)=>setQyery(e.target.value)}  />
                <button type = "submit" className = "btn-nav">
                  <AiOutlineSearch className='iconSearch'/>
                </button>
              </form>
</Col>
      <Row>
    

    {


pro &&

pro.filter(pro=>{

 if(query === ""){
   return pro
 }else if(pro.title.toLowerCase().includes(query.toLowerCase())){
   return pro
 }
}).slice(0,12).map((product) =>(
    
    
     <Col key={product.id}  lg={3} md={6} sm={12}   >
    
    <div className='product'>
    
    
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
    
    </Col> 
    
    
    
    ))
    
      }
      </Row>

  
    </Container>
    
    
      
        </div>
  )
}

export default Product
