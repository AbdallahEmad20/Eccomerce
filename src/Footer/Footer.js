import React from 'react'
import "./Footer.css"

import { AiFillFacebook  , AiFillTwitterCircle , AiFillInstagram} from "react-icons/ai";

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      



      <MDBFooter  className=' bord p-5  '>
      <MDBContainer className='  p-4'>
        <MDBRow>
          <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase te'>Company</h5>

            <ul className='list-unstyled '>
              <li>
                <a href='#!' className='text-dark'>
              About US
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                 Store Locahons
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                 Careers
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase  te'>Help</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
            Order Tracking
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  FAQ'S
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
               Terms&conditions
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase te'>Follow US</h5>

            <ul className='list-unstyled'>
              <li>
              <p style={{color:"#fff"}}>And get Free Shipping on all your orders!</p>
              </li>
                
               <li>
                <div className='iconss' style={{display:"flex" , alignItems:"center" , fontSize:"25px"}}>
                <span> <AiFillFacebook className='con'/></span>
                 <span> < AiFillTwitterCircle className='con'/></span>
                 <span>  < AiFillInstagram className='con'/></span>
                </div>
                </li> 
            </ul>
          </MDBCol>

          <MDBCol lg='4' md='6' className=' mb-4 mb-md-0'>
            <h5 className='text-uppercase  te'>ٍSign up now & get 10% off</h5>

            <ul className='list-unstyled'>
              <li>
               <p style={{fontSize:"14px",  color:"#fff"}}>Be the first to know about our new arrivals and exclusive offers</p>
              </li>
           
           <li className='inputaia'>
           <input type='email' name="email" placeholder='Enter your Eamil'/>
           <button type='submit'>Submit</button>

           </li >
            </ul>
          </MDBCol>
        </MDBRow>
 
        </MDBContainer>


      </MDBFooter>




    </div>
  )
}

export default Footer
