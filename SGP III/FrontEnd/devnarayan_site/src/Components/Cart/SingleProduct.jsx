import React, { useEffect, useState } from 'react'
import './cart.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../feature/Cart/cartSlice';

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

    return (
        <div className="item">
            <div className="det">

                <img src={product.image} alt="" />
                <div className="details">
                    <h1>{product.name}</h1>
                    <div className="price">
                        Quantity : {item.quantity}
                    </div>
                    <div className="price">
                        ${product.price}
                    </div>
                </div>
            </div>
            <div className='but'>
                <div className='button' onClick={() => dispatch(increase(product._id))}>+</div>
                <div className='button' onClick={() => dispatch(decrease(product._id))}>-</div>
            </div>

        </div>
    )
}

export default SingleProduct


