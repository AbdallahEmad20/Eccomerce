import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Form.css"
import Footer from '../../Footer/Footer';
import Navvbar from '../../Navvbar/Navvbar';


const LoginSchema= Yup.object().shape({
    email:Yup.string()
    .email("Enter a valid Email Address")
     .required("Email is Required") ,
  
     password:Yup.string()
     .min( 8 ,"Password shouid be of minumum 8 characters length")
      .required("password is Required") 
  
    })

const Formaia = () => {

    
        const formik = useFormik({
          initialValues: {
            email: "",
            password:"",
          },
      
          validationSchema:LoginSchema,
          onSubmit: (values ) => {
       
            alert(JSON.stringify(values, null, 2));
          },
        });
    
          

  return (
    <div>
      

<Navvbar/>



     <div class="container d-flex justify-content-center align-items-center min-vh-100">



       <div class="row border rounded-5 p-3 bg-white shadow box-area">



       <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background:"rgb(0,33,65)"}}>
           <div class="featured-image mb-3">
            {/* <img src="/Images/form-design-top-illustration-image-1.4.svg" class="img-fluid" style={{width: "500px"}}/> */}
           </div>
           <p class="text-white fs-2" style={{fontFamily: 'Courier New', Courier:"monospace" , fontWeight: "600"}}>Be Verified</p>
           <small class="text-white text-wrap text-center" style={{width: "17rem", Courier:" monospace" ,  fontFamily: 'Courier New'}}>Join experienced Designers on this platform.</small>
       </div> 

   
        
       <div class="col-md-6 right-box">
<form onSubmit={formik.handleSubmit}>




<div class="row align-items-center">
                <div class="header-text mb-4">
                     <h2>Hello,Again</h2>
                     <p>We are happy to have you back.</p>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg bg-light fs-6" placeholder="Email address" name='email'   onChange={formik.handleChange} onBlur={formik.handleBlur}   value={formik.values.email} />
                </div>

                {/* errr */}
                <div className='Error'>
{ formik.touched.email && formik.errors.email ? formik.errors.email:null}  

</div>
                {/* errrr */}
                <div class="input-group mb-1">
                    <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password" name='password'  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                </div>

                {/* errr */}


               
                <div class="Error">
{ formik.touched.password && formik.errors.password ? formik.errors.password : null}  

</div>
                {/* errr */}
                <div class="input-group mb-5 d-flex justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="formCheck"/>
                        <label for="formCheck" class="form-check-label text-secondary"/><small>Remember Me</small>
                    </div>
                    <div class="forgot">
                        <small><a href="#">Forgot Password?</a></small>
                    </div>
                </div>
                <div class="input-group mb-3">
 
                    <button  style={{background:"rgb(0,33,65)" , color:"#fff"}} class="btn btn-lg  w-100 fs-6">Login</button>
                </div>
                <div class="input-group mb-3">
                    <button class="btn btn-lg btn-light w-100 fs-6"><img src="/Images/pngwing.com (56).png" style={{width:"20px"}} class="me-2"/><small>Sign In with Google</small></button>
                </div>
                <div class="row">
                    <small>Don't have account? <a href="#">Sign Up</a></small>
                </div>
          </div>

</form>
       </div> 

      </div>
    </div>




<Footer/>
    </div>
  )
}

export default Formaia
