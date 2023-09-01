import React, { useState } from 'react';
import './Forgot.scss';
import Img from '../Login/logo.png';
import OTPInput from "otp-input-react";

const OtpInputCard = ({ title, sendOTP, otpEnabled, ...rest }) => {
    const [OTP, setOTP] = useState("");



    if (!otpEnabled) {
        return null; // Don't render the OTP input if otpEnabled is false
    }

    return (
        <div style={{ padding: 12 }}>
            <div style={{ marginBottom: 12 }}>{title}</div>
            <OTPInput value={OTP} onChange={setOTP} {...rest} />
            <button>Verify OTP</button>
        </div>
    );
};

export default function Forgot() {
    const [otpEnabled, setOtpEnabled] = useState(false);

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
                            <div>Enter Your Email and we'll send you a link to reset your password.</div>
                        </div>
                        <form className="Forgot-card-form">
                            <div className="form-item">
                                <span className="form-item-icon material-symbols-rounded">mail</span>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    id="emailForm"
                                    autoFocus=""
                                    required=""
                                />
                            </div>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Disable OTP input before sending OTP
                                    setOtpEnabled(true); // Enable OTP input
                                    // Handle other form submission logic here
                                }}
                            >
                                Send OTP
                            </button>
                        </form>

                        <OtpInputCard
                            title="Enter OTP here"
                            otpEnabled={otpEnabled} // Pass the otpEnabled state to the component
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
