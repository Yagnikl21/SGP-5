import React, { useEffect, useState } from 'react';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../feature/Cart/cartSlice'
import axios from 'axios';

export default function Cart() {


    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const userCart = (
            async () => {
                try {
                    const resp = await axios.get(`http://localhost:8080/cart/${user.users._id}`)
                    setProduct(resp.data.items);
                } catch (error) {
                    return error;
                }
            }
        );
        userCart();
    }, []);
    console.log(product);

    const [iceCream,setIceCream] = useState({});
    const fetchDetails = async (prop) => {
        try {
            const res = await axios.get(`http://localhost:8080/icecream1/${prop._id}`);
            setIceCream(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const showProduct = product.map((item) => {
        fetchDetails(item);
        return (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.icecream.name}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        {item.quantity} x ${item.price}
                    </div>
                </div>
                <i className="fa-solid fa-trash delete" onClick={() => dispatch(removeItem(item.id))}></i>
                {/* <DeleteOutlinedIcon
                    className="delete"
                    
                /> */}
            </div>
        )
    })

    // console.log(item,"Iteams one by one")

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {showProduct}
            <div className="total">
                <span>SUBTOTAL</span>
                {/* <span>${totalPrice()}</span> */}
            </div>
            {<button>PROCEED TO CHECKOUT</button>}
            {/* <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span> */}
        </div>
    )
}
