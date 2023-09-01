import React, { useEffect, useState } from 'react';
import './cart.scss';
// import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../feature/Cart/cartSlice'
import axios from 'axios';

export default function Cart() {


    const user = JSON.parse(localStorage.getItem('user'));
    const userCart = (
        async () => {
            console.log("Cart data is heaar");
            try {
                const resp = await axios.get(`http://localhost:8080/cart/${user.users._id}`)
                setProduct(resp.data.items);
            } catch (error) {
                return error;
            }
        }
    );

    useEffect(() => {
        userCart();
    }, []);
    const [product, setProduct] = useState();
    console.log(product);
    // const ShowProduct = product.map((p) => {
    //     return (
    //         <ProductCard data={p} />
    //     )
    // })
    // const showProduct = product.map((item) => {   
    //     return (
    //         <div>
    //             {/* {item} */}
    //             Product 1
    //         </div>
    //     )

    // })

    // console.log(item,"Iteams one by one")
        // (<div className="item" key={item.id}>
        //     <img src={item.img} alt="" />
        //     <div className="details">
        //         <h1>{item.icecream.name}</h1>
        //         <p>{item.desc?.substring(0, 100)}</p>
        //         <div className="price">
        //             {item.quantity} x ${item.price}
        //         </div>
        //     </div>
        //     {/* <DeleteOutlinedIcon
        //         className="delete"
        //         onClick={() => dispatch(removeItem(item.id))}
        //     />  */}
        // </div>)
return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {/* {// showProduct} */}
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
