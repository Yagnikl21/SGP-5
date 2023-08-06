// import React, { useEffect } from 'react';
import './Forgot.scss';
import Img from '../Login/logo.png';
//import { Link } from 'react-router-dom';

// import Signup from '../Index/Signup';

export default function Forgot() {
    return (
        <>
            <div className="Forgot-card-body">
                <div className="Forgot-card-container">
                    <div className="Forgot-card">
                        <div className="Forgot-card-logo">
                            <img src={Img} alt="logo" />
                        </div>
                        <div className="Forgot-card-header">
                            <h1>Forgot Password</h1>
                            <div>Enter Your Email and we'll send you link to reset your password.</div>
                        </div>
                        <form className="Forgot-card-form">
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">mail</span>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    id="emailForm"
                                    autofocus=""
                                    required=""
                                />
                            </div>
                            {/* <a href="#">I forgot my password!</a> */}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}
