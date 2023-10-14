import React, { useState } from 'react'
import"./SmallNav.css"
import { useAccordionButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchCategoriesContent } from '../../rtk/ProductSlice';

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const SmallNav = ({Setshow}) => {

    // const cart =useSelector(state=>state.cart)

    const {Cato} =useSelector(state=>state.Productt)
    
    
    
      //  start dispatch categories Content
    
    
    const dispatch =useDispatch()
    const  HandeleCato =(catoName)=>{
        dispatch((fetchCategoriesContent(catoName)))
       Setshow(true)
    }

  
  
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    }

  return (
    <div>
      





<header>

			<nav ref={navRef}>
			
      <Link to='/formaia' className='loginbtn'>Login</Link>



{
      Cato.slice(9,13).map(cato=>(

        <Link  onClick={()=>HandeleCato(cato)}  to="#" className="nav__link">
          {cato}
        </Link>
      

      ))
        
} 
		

    


    		<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>







    </div>
  )
}

export default SmallNav
