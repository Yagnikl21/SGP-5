import React from 'react'
import './order.scss'
import test from '../../assets/Images/product-1.jpg'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';
export default function order() {

    const array = [1, 2, 3, 4];
    let count = 0;
    const showProduct = array.map((m) => {
        count += 1;
        return (
            <>
                {count > 1 && <hr />}
                <div className="ord-product">
                    <img src={test} alt="Ice-ceream" />
                    <div className="product-det">
                        <div className="ord-product-details">
                            <h4>Vanilla Ice-cream</h4>
                            <p>Description and bhahaha</p>
                        </div>
                        <span className="price">
                            <h5>Price</h5>
                            <h5>Quntity</h5>
                            <h5>Total Price</h5>
                        </span>
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            <Navbar />
            <Header pageTitle="Order" breadcrumbs={['Home', 'Order']} />
            <div className="order">
                <h1>Order Details</h1>
                <div className="details">
                    <div className="productList">
                        <h3>Customer's Cart</h3>
                        <br />
                        {showProduct}
                    </div>
                    <div className="usedetails">
                        <h3>Customer</h3>
                        <br />
                        <h5>UseName</h5>
                        <h5>Email</h5>
                        <h5>+919724460156</h5>
                        <br />
                        <hr />
                        <br />
                        <h4> Address </h4>
                        <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Address</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"newShreedep"}>NEW SHREEDEP</MenuItem>
                                <MenuItem value={"nisrag"}>NISRAG</MenuItem>
                                <MenuItem value={"prince"}>PRINCE</MenuItem>
                                <MenuItem value={"darshan"}>DARSHAN</MenuItem>
                                <MenuItem value={"om"}>OM</MenuItem>
                                <MenuItem value={"girls'sHostel"}>GIRL'S HOSTEL(CHARUSAT CAMPUS)</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h4>Summary</h4>
                        <br />
                        <span className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>500.00</p>
                        </span>
                        <span className='d-flex justify-content-between'>
                            <p>Tax</p>
                            <p>0.00</p>
                        </span>
                        <hr />
                        <span className='d-flex justify-content-between'>
                            <p>Total</p>
                            <p>500.00</p>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
