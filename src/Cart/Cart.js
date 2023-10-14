import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai';

import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';

import Navvbar from "../Navvbar/Navvbar"
import { MinusQuan, PlusQuan, clearCart, removeFromCart } from '../rtk/CartSlice';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Cart = () => {
    const cart =useSelector(state=>state.cart)
    console.log ("cart" , cart)
const dispatch =useDispatch()

// Total Prices in My Cart 
var TotalPrices =cart.reduce((acc , pro)=>{
  return acc+=(pro.price *pro.quantity) 
 } ,0)
 


 
 //  Open section  Empty Cart
const handala =()=>{
  dispatch(clearCart()) 
 
}


  return (
    <div>
<Navvbar/>

{ cart.length > 0  && TotalPrices > 0 ?
<div className='scrolaia'>

<Container className='cartPage'>
<h2 style={{fontWeight:"bold" , fontSize:"22px" , textAlign:"center"}}>Shopping Cart</h2>



<table  className='tablee'>
<thead>

<th>PRODUCT DETAILS</th>
<th>UNIT PRICE</th>
<th>QUANTITY</th>
<th>Remove</th>
<th>AMOUNT</th>
<th></th>


</thead>

<tbody>


{
    cart.map(productt=>(
        <tr key={productt.id}>
       <td className='SpetialTd'>
        <img width={"50px"} src={productt.images && productt.images[0]}/>
      <h4 style={{fontSize:"14px" , marginLeft:"5px"}}>{productt.title}</h4>
      </td>
      <td> <h4 style={{color:"gold"}}>{productt.price * productt.quantity}$</h4></td>
      <td>{productt.quantity }</td>

      <td><button className='RomoveBtn' onClick={()=>dispatch(removeFromCart(productt))} >Delete</button></td>


<td >

<div className='PlusAndMiuns' >
<button onClick={()=>dispatch(MinusQuan(productt))}><AiOutlineMinus/> </button>
<button onClick={()=>dispatch(PlusQuan(productt))} ><AiOutlinePlus/></button>
</div>

</td>


      </tr>        
       ))

    
        }


</tbody>

</table>



</Container>

</div>

:


<div className='PageFinal'>
<div className="cartxy">
<p>Your cart is currently empty.</p>
<Link to="/" >
  <button className="bttncarttt">Back to Home</button></Link>
</div>




  </div>





      }     








<Container>
<div className='spetial'>
<button className='Clearbtn' onClick={handala}>
<AiFillDelete style={{fontSize:"18px" , marginRight:"2px"}}/>
   CLEAR CART
</button>


<div className='Total'>
<span> <h5>Total ({cart.length}items):</h5> <h5 className='speialH5'>${TotalPrices}</h5></span>
<button >CHECK OUT</button>
</div>

</div>

</Container>
<Footer className="MYFOOt"/>


    </div>
  )
}

export default Cart
