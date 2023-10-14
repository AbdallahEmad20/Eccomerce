
import"./Navvbar.css"
import { Link, useSearchParams } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsFillCartCheckFill  } from 'react-icons/bs';
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import { useState } from "react";



const Navvbar = () => {


  const cart =useSelector(state=>state.cart)
 //  End dispatch categories Content

  return (
    <div className='Navbarrr'>
      


      <div className='navaia'>

<Container>

<div className='iconia'>

   <Link className='linkaia' to = "/">
    <span  className = "textCo">Shopping</span><span className='Hub'>Hub.</span>
              </Link>

</div>

{/* 
<form className = "formaia">
                <input type = "search" placeholder='Search here ...'  />
                <button type = "submit" className = "btn-nav">
                  <AiOutlineSearch className='iconSearch'/>
                </button>
              </form> */}




              <div className="d-flex align-items-center iconsCart ">

<Link to='/cart' style={{color:"black"}}><BsFillCartCheckFill style={{fontSize:"29px" }}/></Link> 
<span>{cart.length}</span>

</div>


</Container>


      </div>








    </div>
  )
}

export default Navvbar
