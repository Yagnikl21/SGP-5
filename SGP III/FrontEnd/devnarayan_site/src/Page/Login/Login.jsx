import React, { useEffect, useState } from 'react';
import './Login.scss';
import Img from '../Login/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../feature/User/userSlice';
// import Signup from '../Index/Signup';

export default function Login() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const { loading, error } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function login(e) {
        e.preventDefault();
        // setemail("");
        // setpassword("");
        // const item = { email, password };
        // console.log(item);
        // let result = await fetch("http://localhost:8080/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify(item),
        // });
        // result = await result.json();
        // console.log(result);

        let userCredentials = {
            email,
            password
        }

        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {
                setemail('');
                setpassword('');
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

                        {/* <a href="#">I forgot my password!</a> */}
                        <Link to="/Forgot">I forgot my password!</Link>
                        <button type="submit">Sign In</button>
                    </form>
                    <div className="login-card-footer">
                        Don't have an account? <Link to="/Signup">Sign up</Link>
                    </div>
                </div>
            </div>

        </>

    );
}
