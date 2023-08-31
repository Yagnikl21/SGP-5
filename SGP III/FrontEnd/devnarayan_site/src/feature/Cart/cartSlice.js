import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userCart = createAsyncThunk('cart/userCart',
    async(userID)=>{
        const request = await axios.post('http://localhost:8080/cart',userID);
        const response = await request.data;   
        console.log(response);    
        return response;
    }
)

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        loading:false,
        cartData:null,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userCart.pending,(state)=>{
            state.loading = true;
            state.cartData=null;
            state.error=null;
        })
        .addCase(userCart.fulfilled,(state,action)=>{
            state.loading = false;
            state.cartData = action.payload;
            state.error = null;
        })
        .addCase(userCart.rejected , (state,action)=>{
            state.loading = false;
            state.cartData = null;
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error = 'Access Denied!';
            }
            else{
                state.error = action.error.message;
            }
        })
    }
})

export default cartSlice.reducer;