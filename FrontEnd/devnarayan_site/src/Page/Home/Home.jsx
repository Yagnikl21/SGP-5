import React from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'
import Service from '../../Components/Service/Service'
import Product from '../../Components/Product/Product'

export default function Home() {
  return (
    <div className="home">

    <div className="container-fluid py-3 d-none d-md-block section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                         {/* eslint-disable-next-line */}
                        <a className="text-white pr-3" href="" >FAQs</a>
                        <span className="text-white px-3">|</span>
                        {/*  eslint-disable-next-line */}
                        <a className="text-white " href="">Help</a>
                        <span className="text-white px-3">|</span>
                         {/* eslint-disable-next-line */}
                        <a className="text-white pl-3" href="">Support</a>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-right ">
                         {/* eslint-disable-next-line */}
                        <a className="text-white px-3" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                         {/* eslint-disable-next-line */}
                        <a className="text-white px-3" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                         {/* eslint-disable-next-line */}
                        <a className="text-white px-3" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                         {/* eslint-disable-next-line */}
                        <a className="text-white px-3" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                         {/* eslint-disable-next-line */}
                        <a className="text-white pl-3" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <button className='btn btn-primary'>Hello</button> */}
    </div>
        <Navbar />
        <Carousel />
        <Service />
        <Product />
    </div>
  )
}
