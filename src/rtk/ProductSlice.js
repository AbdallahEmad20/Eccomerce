import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export  const fetchCategoriesContent=createAsyncThunk("CategoryNAmeSlice", async(catoName)=>{
  const res =await fetch(`https://dummyjson.com/products/category/${catoName}`)
  const data = await res.json()
  // data =action.payload
  console.log("CatoContent" , data.products)
  return data.products
})


export  const fetchCategories=createAsyncThunk("CategoriesSlice", async()=>{
  const res =await fetch("https://dummyjson.com/products/categories")
  const data = await res.json()
  // data =action.payload
  console.log("Cato" , data)
  return data
})



export  const ProDetails=createAsyncThunk("detailsProduct", async(dataa)=>{
    const res =await fetch(`https://dummyjson.com/products/${dataa}`)
    const data = await res.json()
    // data =action.payload
    console.log( "mypro=====" , data)
    return data
  })
  


export  const fetchProduct=createAsyncThunk("productSlice", async()=>{
    const res =await fetch("https://dummyjson.com/products")
    const data = await res.json()
    // data =action.payload
    console.log("datttttttta" , data.products)
    return data.products
  })
  

  
  const ProductSlice =createSlice({
    name: "product",
    initialState:{arr:[] , detail:[] , Cato:[] , CatoCon:[] ,  isLoading:false },
    extraReducers:{
     [fetchProduct.fulfilled]:(state , action)=>{
      
      state.arr =action.payload
      state.isLoading=false

     },

     [fetchProduct.pending]:(state , action)=>{
      
      state.isLoading=true
     },

     [ProDetails.fulfilled]:(state , action)=>{
        state.detail =action.payload
    },
  [fetchCategories.fulfilled]:(state , action)=>{
   
  state.Cato =action.payload
}
,

[fetchCategoriesContent.fulfilled]:(state , action)=>{
   
  state.CatoCon =action.payload
}
    }
})





export default ProductSlice.reducer
