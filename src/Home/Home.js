import React, { useEffect, useState } from 'react'
import Navvbar from '../Navvbar/Navvbar'
import HeaderSlider from '../HeaderSlider/HeaderSlider'
import "./Home.css"
import { Col, Container, Form , Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, fetchCategoriesContent, fetchProduct } from '../rtk/ProductSlice'
import Pro from '../Products/Pro'
import { InfinitySpin } from  'react-loader-spinner'
import Product from '../Product/Product'
import SeeOurCato from '../SeeOurCate/SeeOurCato'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Formaia from '../components/forms/Formaia'
import SmallNav from '../Navvbar/SmallNav/SmallNav'
import ScrollToTop from "react-scroll-to-top";

const Home = ({query}) => {



  
const [show , SetShow]=useState(false)

  // const {arr} =useSelector(state=>state.Productt)
  const dispatch =useDispatch()

  // Fetch Products =============================
  const {arr ,isLoading} =useSelector(state=>state.Productt)

  useEffect(()=>{
   dispatch(fetchProduct())
  },[])


  // Fetch Categories=============================
const {Cato} =useSelector(state=>state.Productt)
console.log(Cato)
useEffect(()=>{
  dispatch((fetchCategories()))
 },[])





//  =================================================
let cato0=arr.filter(pro=>pro.category === Cato[0]) 
let cato1=arr.filter(pro=>pro.category === Cato[1]) 
let cato2=arr.filter(pro=>pro.category === Cato[2]) 
let cato3=arr.filter(pro=>pro.category === Cato[3]) 







  return (


    


 <div>
  <Navvbar/>
<SmallNav Setshow={SetShow} />
<HeaderSlider/>







{/* section See Our Products */}
<Container>

<div>{
  show ?
 <h2 className='title'>More Products</h2> 
   :
   <h2></h2>
  }
 <SeeOurCato/>

</div>

</Container>

{/* End section  */}




 {/* start section one */}


 
 <section className='Sec1'> 

 <Container>
 
 <h2 className='title'>Our Products</h2>
 
 {
 isLoading ? 
 <div className='Spinner'>
   <InfinitySpin 
   width='200'
   color="rgb(0, 33, 65)"
 />
 
 
 </div> :
 
 <Product pro={arr} query={query}/>
 }
 </Container>
       </section>

  
       <section className='Imagee'> 

<img src='/Images/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'/>
</section>









{/* Start section Two */}

      <section className='Sec2'>
        <Container>

<h2 className='title'>{Cato[0]}</h2>
{
isLoading ? 
<div className='Spinner'>
  <InfinitySpin 
  width='200'
  color="rgb(0, 33, 65)"
/>
</div>
:

<Pro pro={cato0}/>
}
</Container>
      </section>

{/* Start section3 */}
      <section className='Sec3'>
        <Container>

<h2  className='title'>{Cato[1]}</h2>
{
isLoading ? 
<div className='Spinner'>
  <InfinitySpin 
  width='200'
  color="rgb(0, 33, 65)"
/>
</div>
:

<Pro pro={cato1}/>
}

 </Container>
      </section>
    
     {/* Start section 4  */}
       <section className='Sec4'>
        <Container>

<h2  className='title'>{Cato[2]}</h2>

{
isLoading ? 
<div className='Spinner'>
  <InfinitySpin 
  width='200'
  color="rgb(0, 33, 65)"
/>
</div>
:

<Pro pro={cato2}/>
}
 </Container>
      </section> 


{/* Start setion5 */}
      <section className='Sec5'>
        <Container>

<h2  className='title'>{Cato[3]}</h2>

{
isLoading ? 
<div className='Spinner'>
  <InfinitySpin 
  width='200'
  color="rgb(0, 33, 65)"
/>
</div>
:

<Pro pro={cato3}/>
}
 </Container>
      </section>   



{/* End Section */}

<section className="homesec6" id="contact">
        <Container>
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Contact Us</h3>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} className="wow slideInLeft BoxForm" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <p><span>Email:</span> Abdallahemad@gmail.com</p>
                <p><span>Phone:</span> 01066844580</p>
                <p><span>Address:</span> 2 street newyork</p>
              </div>
            </Col>
            <Col lg={6}  md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
              <div>
              {/* ref={form} onSubmit={sendEmail} */}
                <form  >
                  <div  className="d-flex">
                    <input type="text" name="user_name" placeholder="Name" />
                    <input type="text" name="company" placeholder="Company" />
                  </div>
                  <div   className="d-flex">
                    <input type="text" name="user_email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
               
          
             
             <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Send Message</button>
        
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <div>
     
      <div     />
      <ScrollToTop smooth className='TopBtn' color='#fff'   />
    </div>
<Footer/>
    </div>
  )
}

export default Home
