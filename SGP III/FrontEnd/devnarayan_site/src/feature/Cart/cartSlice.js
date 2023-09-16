import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { openModal } from '../modal/modalSlice';

const user = JSON.parse(localStorage.getItem('user'));
const users = user == null ? null : user.users;

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    const url = `http://localhost:8080/cart/${users._id}`;
    console.log("Request")
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const updateCart = async (prop) => {
  const headers = {
    // 'Authorization': 'Bearer yourAccessToken',
    'Content-Type': 'application/json',
  };

  const body = prop;
  try {
    const res = await axios.post(`http://localhost:8080/cart/${users._id}/update`, body, { headers });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
}

const increaseItem = async (prop) => {
  try {
    const res = await axios.put(`http://localhost:8080/cart/add/${users._id}/${prop}`);
    console.log(res);
    return res.statusCode;
  }
  catch (error) {
    console.error(error);
  }
}

const decreaseItem = async (prop) => {
  try {
    const res = await axios.put(`http://localhost:8080/cart/sub/${users._id}/${prop}`);
    console.log(res);
    return res.statusCode;
  }
  catch (error) {
    console.error(error);
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = state.cartItems.filter(() => 1 === 0);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item._id !== itemId);
      updateCart(state.cartItems);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.icecream._id === payload);
      cartItem.quantity = cartItem.quantity + 1;
      increaseItem(payload);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.icecream._id === payload);
      cartItem.quantity = cartItem.quantity - 1;
      decreaseItem(payload);
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
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.items;
        state.amount = action.payload.items.length;
        state.total = action.payload.total;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;