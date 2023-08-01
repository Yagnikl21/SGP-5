import React, { useEffect } from 'react';
import './Login.scss';
import Img from '../Login/logo.png';

// import Signup from '../Index/Signup';

export default function Index() {
    return (
        <>
            <div className="login-card-container login-card-body">
                <div className="login-card">
                    <div className="login-card-logo">
                        <img src={Img} alt="logo" />
                    </div>
                    <div className="login-card-header">
                        <h1>Sign In</h1>
                        <div>Please login to use the platform</div>
                    </div>
                    <form className="login-card-form">
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
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                id="passwordForm"
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
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="login-card-footer">
                        Don't have an account? <a href='/Signup'>Createa a free account.</a>
                    </div>
                </div>
            </div>
        </>

    );
}
