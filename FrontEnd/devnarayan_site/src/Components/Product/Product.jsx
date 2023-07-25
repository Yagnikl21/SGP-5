import './product.scss'
import img from '../../assets/Images/product-1.jpg'

export default function Product() {

    const product = [
        { title: 'Vanila Ice Cream' },
        { title: 'Choclate Ice cream' },
        { title: 'Vanila Ice Cream' },
        { title: 'Choclate Ice cream' },
        { title: 'Vanila Ice Cream' },
        { title: 'Choclate Ice cream' },
        { title: 'Vanila Ice Cream' },
        { title: 'Choclate Ice cream' },
        { title: 'Vanila Ice Cream' },
        { title: 'Choclate Ice cream' }
    ]

    const ShowProduct = product.map((p) => {
        return (
            <div className="col-12 col-md-6 col-lg-3 py-0 px-3 bg-light">
                <div className="product-item d-flex flex-column align-items-center text-center bg-white  rounded">
                    <div className=" py-3 price" style={{ width: "80px" }}>
                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                    </div>
                    <div className="position-relative rounded-circle mt-n3 mb-4 p-3 image" style={{ width: "150px", height: "150px" }}>
                        <img className="rounded-circle w-100 h-100" src={img} style={{ objectFit: "cover" }} alt='ImageOfIceCream' />
                    </div>
                    <h5 className="font-weight-bold mb-4">{p.title}</h5>
                    <a href="" className="btn btn-sm btn-secondary">Order Now</a>
                </div>
            </div>
        )
    })

    return (
        <div className="container-fluid py-5 product bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
                </div>
                <div className="row">
                    <div className="col-12 ">
                        <div className="row owl-carousel product-carousel">

                            {
                                ShowProduct
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
