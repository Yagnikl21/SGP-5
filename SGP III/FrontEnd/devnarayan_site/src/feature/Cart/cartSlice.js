import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'));

console.log(user.users._id,"User from cartScile");
export const userCart = createAsyncThunk(
    'cart/userCart',
    // console.log(thunkAPI);
    async (thunkAPI) => {
        console.log("Cart data is heaar");
        try {
            const resp = await axios.get(`http://localhost:8080/cart/${user.users._id}`)
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        loading: false,
        cartData: [],
        error: null
    },
    reducers: {
        clearCart: (state) => {
            state.cartItems = state.cartItems.filter(() => 1 === 0);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {
        console.log("API calling is done")
        builder
            .addCase(userCart.pending, (state) => {
                console.log("Everything is filled")
                state.loading = true;
                state.cartData = null;
                state.error = null;
            })
            .addCase(userCart.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload,"Payload ");
                state.cartData = action.payload;
                state.error = null;
            })
            .addCase(userCart.rejected, (state, action) => {
                state.loading = false;
                state.cartData = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access Denied!';
                }
                else {
                    state.error = action.error.message;
                }
            });
    },
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;