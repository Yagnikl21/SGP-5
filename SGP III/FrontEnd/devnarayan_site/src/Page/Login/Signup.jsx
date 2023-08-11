// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import './Login.scss';
import Img from '../Login/logo.png';
// import { Link } from 'react-router-dom';
// import Signup from './Index';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../feature/User/signupSlice';

export default function Signup() {
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [mobile_number, setmobile_number] = useState("");
    const { loading, error } = useSelector((state) => state.signup);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function signup(e) {
        e.preventDefault();
        let userData = {
            email, username, password, confirmpassword, mobile_number
        }
        dispatch(signupUser(userData)).then((result) => {
            if (result.payload) {
                setemail('');
                setpassword('');
                setconfirmpassword('');
                setusername('');
                setmobile_number('');
                navigate('/');
            }
        })
    }
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

                    <form className="login-card-form" onSubmit={signup}>

                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">mail</span>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                id="emailForm"
                                autofocus=""
                                required=""
                                name="email"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">Person</span>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                id="userForm"
                                autofocus=""
                                required=""
                                name="username"
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>

                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                id="passwordForm"
                                required=""
                                name="password"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">lock</span>
                            <input
                                type="password"
                                placeholder="Enter Confirm Password"
                                id="confirmForm"
                                required=""
                                name="confirmpassword"
                                onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                        </div>
                        <div className="form-item">
                            <span className="form-item-icon material-symbols-rounded">phone</span>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                id="phoneForm"
                                required=""
                                name="mobile_number"
                                onChange={(e) => setmobile_number(e.target.value)}
                            />
                        </div>

                        {/* <a href="#">I forgot my password!</a> */}

                        <button type="submit" >{
                            loading ? 'Loading...' : 'Sign up'}
                        </button>
                        {error && (
                            <div className='alert alert-danger' role='alert'>{error}</div>
                        )}
                    </form>

                    {/* <a href="#">I forgot my password!</a>
                        <button type="submit">Sign Up</button>
                    </form> */}
                    <div className="login-card-footer">
                        Already have an account <Link to='/login'>Sign In</Link>
                    </div>
                </div>
            </div>
        </>

    );
}
