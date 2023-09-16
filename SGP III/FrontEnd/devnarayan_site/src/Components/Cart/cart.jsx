import React, { useEffect } from 'react';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems} from '../../feature/Cart/cartSlice'
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

export default function Cart() {

    const { cartItems, total } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const onClick = () =>{
        getCartItems();
    }

    const showProduct = cartItems.map((item) => {
        return (
            <SingleProduct item={item} key={item._id} clickHandler={onClick}/>
        )
    })

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {showProduct}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${total}</span>
            </div>
            {<Link to="/order"><button>PROCEED TO CHECKOUT</button></Link>}
            <span className="reset">
                Reset Cart
            </span>
        </div>
    )
}
