import React, { useEffect } from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'
import Service from '../../Components/Service/Service'
import Product from '../../Components/Product/Product'
import Aboutinfo from '../../Components/Aboutinfo/Aboutinfo'
import Footer from '../../Components/Footer/Footer'
import Chefdetails from '../../Components/Chefdetails/Chefdetails'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../../feature/Cart/cartSlice'

export default function Home() {
    const { user } = useSelector(state => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
        if (user !== null) {
            dispatch(getCartItems());
        }
    }, [])
    return (
        <div className="home">
            <Navbar />
            <Carousel />
            <Aboutinfo />
            <Service />
            <Product />
            <Chefdetails />
            <Footer />
            {/* <a href="#" class="btn btn-secondary px-2 back-to-top"><i class="fa fa-angle-double-up"></i></a> */}
            <a href="#" className="btn btn-secondary px-2 back-to-top">
                <i class="fa fa-angle-double-up"></i></a>
        </div>
    )
}
