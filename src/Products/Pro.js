import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Pro = ({pro}) => {
  return (


    
    <div className='pro'>



    <Container>
    
      <Row>
    
    {
      pro.slice(0 , 4).map((product) =>(
    
    
     <Col  key={product.id} lg={3} md={6} sm={12}   >
    
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
     <p style={{color:"gold"  ,fontWeight:"500" , marginLeft:"4px"}}>({product.discountPercentage}% off)</p>
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

export default Pro
