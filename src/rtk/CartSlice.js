import { createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
 initialState:[],
 name:"cartSlice",
 
 reducers:{
   // Add to cart 
     addToCart:(state,action)=>{
        const FindProduct = state.find((product)=> product.id === action.payload.id)
      
        console.log("Find Product" , FindProduct)
        if(FindProduct){
         FindProduct.quantity+=1;
        }
        else{
  const productClone ={...action.payload , quantity:1} 
        
  state.push(productClone)
  }

     
     },
   // Remove from cart 

     removeFromCart:(state , action)=>{

        return  state.filter((produyt)=>produyt.id !== action.payload.id)
     },

   //   Empty All of the cart
     clearCart:(state , action)=>{
     return [] 
    },
  
   //   Button plus of Quantity
    PlusQuan:(state , action)=>{
      
      
      //  هنا التعديل بيحصل علي المنتج بتاع ال  state   فقط ياهندسة  مش الاكشن دوت بيسلود
       state.map((product)=> product.id === action.payload.id ?   product.quantity+=1 : false)
      
     
    },

   //  Muinus of Quantity
    MinusQuan:(state , action)=>{
      const testt =  state.find((product)=> product.id === action.payload.id  && product.quantity >1)
    
      if(testt){
         testt.quantity-=1 
      }
      else{
         // remove there is above in aremove function 
         return  state.filter((produyt)=>produyt.id !== action.payload.id)
      }
    }
 }
})

export default CartSlice.reducer
export const {addToCart , removeFromCart, clearCart , PlusQuan , MinusQuan} =CartSlice.actions

