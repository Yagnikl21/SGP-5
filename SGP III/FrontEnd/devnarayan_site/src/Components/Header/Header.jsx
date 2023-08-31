import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid page-header" >
                <div className="container text-center py-5">
                    <h1 className="text-white display-3 mt-lg-5" style={{ fontWeight: "50px" }}>About</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0">Home</p>
                        <i className="fa fa-circle px-3"></i>
                        <p className="m-0">About</p>
                    </div>
                </div>
            </div>
        </div>
    )
}