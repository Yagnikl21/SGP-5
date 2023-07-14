import React from 'react'
import './Service.scss'

export default function Service() {
    return (
        <div className="container-fluid py-5 service">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative mb-5">Best Services We Provide For Our Clients</h1>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0 side_arrow">
                        <i className="fa-solid single_arrow fa-angle-left fa-xl" ></i>
                        <i className="fa-solid single_arrow fa-angle-right fa-xl" ></i>

                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="owl-carousel service-carousel">
                            <div className="service-item">
                                <div className="service-img mx-auto">
                                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-1.jpg" />
                                    {/* style="object-fit: cover;" */}
                                </div>
                                <div className="position-relative text-center bg-light rounded p-4 pb-5" >
                                    {/* style="margin-top: -75px;" */}
                                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Quality Maintain</h5>
                                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                    <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-img mx-auto">
                                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-2.jpg" />
                                    {/* style="object-fit: cover;" */}
                                </div>
                                <div className="position-relative text-center bg-light rounded p-4 pb-5" >
                                    {/* style="margin-top: -75px;" */}
                                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Individual Approach</h5>
                                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                    <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-img mx-auto">
                                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-3.jpg" />
                                    {/* style="object-fit: cover;"  */}
                                </div>
                                <div className="position-relative text-center bg-light rounded p-4 pb-5" >
                                    {/* style="margin-top: -75px;" */}
                                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Celebration Ice Cream</h5>
                                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                    <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="service-img mx-auto">
                                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-4.jpg" />
                                    {/* style="object-fit: cover;"  */}
                                </div>
                                <div className="position-relative text-center bg-light rounded p-4 pb-5" >
                                    {/* style="margin-top: -75px;" */}
                                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Delivery To Any Point</h5>
                                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo</p>
                                    <a href="" className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
