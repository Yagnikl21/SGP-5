import React, { useEffect } from 'react';
import './Login.scss';
import Img from '../Login/logo.png';
import { Link } from 'react-router-dom';
// import Signup from './Index';

export default function Signup() {
    return (
        <>
            <div className="login-card-container login-card-body">
                <div className="login-card">
                    <div className="login-card-logo">
                        <img src={Img} alt="logo" />
                    </div>
                    <div className="login-card-header">
                        <h1>Sign Up</h1>
                        <div>Please login to use the platform</div>
                    </div>
                    <form className="login-card-form">
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">Person</span>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                id="userForm"
                                autofocus=""
                                required=""
                            />
                        </div>
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
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">phone</span>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                id="phoneForm"
                                required=""
                            />
                        </div>
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                id="passwordForm"
                                required=""
                            />
                        </div>
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <input
                                type="password"
                                placeholder="Enter Confirm Password"
                                id="confirmForm"
                                required=""
                            />
                        </div>

                        <div className="form-item-other">
                            <div className="checkbox">
                                <input type="checkbox" id="rememberMeCheckbox" defaultChecked="" />
                                <label htmlFor="rememberMeCheckbox">Remember me</label>
                            </div>
                        </div>
                        <a href="#">I forgot my password!</a>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="login-card-footer">
                        Already have an account <Link to='/login'>Sign In</Link>
                    </div>
                </div>
            </div>
        </>

    );
}
