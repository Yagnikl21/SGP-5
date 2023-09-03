import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid py-3 d-none d-md-block section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                {/* eslint-disable-next-line */}
                <a className="text-white pr-3" href="" >FAQs</a>
                <span className="text-white px-3">|</span>
                {/*  eslint-disable-next-line */}
                <a className="text-white " href="">Help</a>
                <span className="text-white px-3">|</span>
                {/* eslint-disable-next-line */}
                <a className="text-white pl-3" href="">Support</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-right ">
                {/* eslint-disable-next-line */}
                <a className="text-white px-3" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* eslint-disable-next-line */}
                <a className="text-white px-3" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                {/* eslint-disable-next-line */}
                <a className="text-white px-3" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* eslint-disable-next-line */}
                <a className="text-white px-3" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* eslint-disable-next-line */}
                <a className="text-white px-3" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative nav-bar p-0 navbar_con">
        {/* eslint-disable-next-line */}
        <div className="container-lg position-relative p-0 px-lg-3">
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
            <a href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="m-0 display-4 text-primary"><span className="text-secondary">DEV</span>NARAYAN</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon">

              </span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <NavLink to="/" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>About</NavLink>
                <NavLink to="/products" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>Product</NavLink>
              </div>
              <NavLink to="/" className="navbar-brand mx-5 d-none d-lg-block">
                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">DEV</span>NARAYAN</h1>
              </NavLink>
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/servies" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>Service</NavLink>
                <NavLink to="/gallery" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>Gallery</NavLink>
                <NavLink to="/contact" className="nav-item nav-link" style={({ isActive }) => ({
                  color: isActive ? '#F195B2' : '#77777'
                })}>Contact</NavLink>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </>
  )
}