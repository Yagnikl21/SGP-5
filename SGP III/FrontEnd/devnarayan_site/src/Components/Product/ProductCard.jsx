import React from 'react'
// import img from '../../assets/Images/product-1.jpg'
import './product.scss'


export default function ProductCard({data}) {
  const img = data.image ? data.image : require("../../assets/Images/product-1.jpg");
  return (
    <div className="product-item-m col-12 col-md-6 col-lg-3 py-0 px-3">
      <div className="product-item d-flex flex-column align-items-center text-center bg-white  rounded">
        <div className=" py-3 price" style={{ width: "80px" }}>
          <h4 className="font-weight-bold text-white mb-0">${data.price}</h4>
        </div>
        <div className="position-relative rounded-circle mt-n3 mb-4 p-3 image" style={{ width: "150px", height: "150px" }}>
          <img className="rounded-circle w-100 h-100" src={img} style={{ objectFit: "cover" }} alt='ImageOfIceCream' />
        </div>
        <h5 className="font-weight-bold mb-4">{data.name}</h5>
        <a href="" className="btn btn-sm btn-secondary">Order Now</a>
      </div>
    </div>
  )
}
