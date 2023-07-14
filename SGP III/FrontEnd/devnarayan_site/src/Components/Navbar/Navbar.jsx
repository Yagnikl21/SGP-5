import React from 'react'
import './Navbar.scss'

export default function Navbar() {

  return (
    <div className="container-fluid position-relative nav-bar p-0 navbar_con">
      {/* eslint-disable-next-line */}
      <div className="container-lg position-relative p-0 px-lg-3">
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon">
             
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="product.html" className="nav-item nav-link">Product</a>
            </div>
            <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
              <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
            </a>
            <div className="navbar-nav mr-auto py-0">
              <a href="service.html" className="nav-item nav-link">Service</a>
              <a href="gallery.html" className="nav-item nav-link">Gallery</a>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}
