import React, { useEffect, useState } from 'react'
import './cart.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../feature/Cart/cartSlice';

function SingleProduct({ item, clickHandler }) {
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        const fun = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/icecream/ice/${item.icecream._id}`);
                setProduct(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fun();
    }, [])

    const img = product.image ? product.img : require("../../assets/Images/product-1.jpg");
    return (
        <div className="item">
            <img src={img} alt="" />
            <div className="details">
                <h1>{product.name}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">
                    {item.quantity} x ${product.price}
                </div>
            </div>
            <i className="fa-solid fa-trash delete" onClick={
                () => {
                    dispatch(removeItem(item._id))
                    clickHandler()
                }
            }></i>
        </div>
    )
}

export default SingleProduct


