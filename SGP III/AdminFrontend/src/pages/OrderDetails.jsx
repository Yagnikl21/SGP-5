import React from 'react';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import './OrderDetails.scss'
import OrderItem from './OrderItem';

export default function OrderDetails({ isOpen, onClose, onConfirm, order }) {
    const user = order.userData;
    const ord = order._doc;
    let count = 0;
    const Items = ord.items;
    const showProduct = Items.map((m) => {
        count += 1;
        return (
            <OrderItem key={m.iceream} count={count} m={m} />
        );
    });
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div className="modal-container">
                <div className="modal-content">
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <div className="modal-header">Order Details</div>
                    <div className="modal-body flex flex-row-reverse justi items-start" >
                        <div className="right flex-1">
                            <div>Order ID : {ord._id}</div>
                            <div>Ordered By : {user.username}</div>
                            <div>Total Items : {ord.items.length}</div>
                            <div>Total Price : {ord.total}</div>
                            <div>Location : {ord.hostel}</div>
                        </div>
                        <div className='left flex-1' >
                            <h3>Item List</h3>
                            <div className="productList">
                                <br />
                                {showProduct}
                            </div>
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button className="button cancel" onClick={onClose}>Cancel</button>
                        <button className="button confirm" onClick={onConfirm}>Confirm</button>
                    </div> */}
                </div>
            </div>
        </Modal>
    );
}
