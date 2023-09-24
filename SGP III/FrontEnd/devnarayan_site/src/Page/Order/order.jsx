import React, { useState } from 'react';
import OrderConfirmationModal from './OrderConfirmationModal';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './order.scss';

export default function Order() {
    const { user } = useSelector(state => state.user);
    const { cartItems, total } = useSelector(state => state.cart);
    let count = 0;

    const showProduct = cartItems.map((m) => {
        count += 1;
        return (
            <OrderItem key={m.productId} count={count} m={m} />
        );
    });

    const [address, setAddress] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddressSelected, setIsAddressSelected] = useState(false);
    const [isOrderMessageVisible, setIsOrderMessageVisible] = useState(false);

    const handleChange = (e) => {
        setAddress(e);
        setIsAddressSelected(true);
    };

    const handleClick = () => {
        if (isAddressSelected) {
            console.log("Opening the modal");
            setIsModalOpen(true);
        } else {
            setIsOrderMessageVisible(true);
        }
    };

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
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                        <h5>{user.mobile_number}</h5>
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
                                label="Address"
                                onChange={(e) => handleChange(e.target.value)}
                            >
                                <MenuItem value={"newShreedep"}>NEW SHREEDEP</MenuItem>
                                <MenuItem value={"nisrag"}>NISRAG</MenuItem>
                                <MenuItem value={"prince"}>PRINCE</MenuItem>
                                <MenuItem value={"darshan"}>DARSHAN</MenuItem>
                                <MenuItem value={"om"}>OM</MenuItem>
                                <MenuItem value={"girls'sHostel"}>GIRL'S HOSTEL(CHARUSAT CAMPUS)</MenuItem>
                            </Select>
                        </FormControl>
                        {isOrderMessageVisible && !isAddressSelected && (
                            <p style={{ color: 'red' }}>Please select an address before confirming the order.</p>
                        )}
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h4>Summary</h4>
                        <br />
                        <span className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>{total}</p>
                        </span>
                        <span className='d-flex justify-content-between'>
                            <p>Tax</p>
                            <p>0.00</p>
                        </span>
                        <hr />
                        <span className='d-flex justify-content-between'>
                            <p>Total</p>
                            <p>{total}</p>
                        </span>
                        <span>
                            <button className='btn btn-primary' onClick={handleClick}>Confirm Order</button>
                        </span>
                        
                    </div>
                </div>
            </div>
            <Footer />

            {/* Render the OrderConfirmationModal component */}
            <OrderConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={() => {
                    // Add your logic to confirm the order here
                    // For example, you can make an API request to place the order
                    // and then update the UI accordingly
                    // Once the order is confirmed, you can close the modal using setIsModalOpen(false)
                    console.log("Order is confirmed");
                    setIsModalOpen(false);
                }}
            />
        </>
    )
}
