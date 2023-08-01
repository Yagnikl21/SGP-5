import './product.scss'
import img from '../../assets/Images/product-1.jpg'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Product() {

    // const product = [
    //     { title: 'Vanila Ice Cream' },
    //     { title: 'Choclate Ice cream' },
    //     { title: 'Vanila Ice Cream' },
    //     { title: 'Choclate Ice cream' },
    //     { title: 'Vanila Ice Cream' },
    //     { title: 'Choclate Ice cream' },
    //     { title: 'Vanila Ice Cream' },
    //     { title: 'Choclate Ice cream' },
    //     { title: 'Vanila Ice Cream' },
    //     { title: 'Choclate Ice cream' }
    // ]

    const [product, setProduct] = useState([]);
    useEffect(()=>{
        const fechData = async () => {
            try{
                const res = await axios.get("http://localhost:8080/icecream/allice");
                // console.log(res);
                setProduct(res.data);
                console.log(product);
            }catch (err){
                console.log('Error to fech Data');
                console.log(err);
            }
        }

        fechData();
    },[])

    var count = 0;
    const ShowProduct = product.map((p) => {
        count++;
        return (
            // <SingleProduct product={p} />
            <div className="product-item-m col-12 col-md-6 col-lg-3 py-0 px-3">
                <div className="product-item d-flex flex-column align-items-center text-center bg-white  rounded">
                    <div className=" py-3 price" style={{ width: "80px" }}>
                        <h4 className="font-weight-bold text-white mb-0">${count}</h4>
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

    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLeft = () => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.querySelector('.product-item-m').clientWidth;
            const newPosition = scrollPosition - cardWidth;
            setScrollPosition(Math.max(0, newPosition));
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.querySelector('.product-item-m').clientWidth;
            const containerWidth = containerRef.current.clientWidth;
            const maxScrollPosition = containerRef.current.scrollWidth - containerWidth;
            const newPosition = scrollPosition + cardWidth;
            setScrollPosition(Math.min(maxScrollPosition, newPosition));

            console.log(scrollPosition);
        }
    };

    // const scrollLeft = () => {
    //     const container = document.querySelector('.product-carousel');
    //     const cardWidth = container.querySelector('.product-item-m').clientWidth;
    //     const newPosition = container.scrollLeft - cardWidth;
    //     container.scrollBy({ left: newPosition, behavior: 'smooth' });
    // };
    
    // const scrollRight = () => {
    //     const container = document.querySelector('.product-carousel');
    //     const cardWidth = container.querySelector('.product-item').clientWidth;
    //     const containerWidth = container.clientWidth;
    //     const maxScrollPosition = container.scrollWidth - containerWidth;
        
    //     // Calculate the number of cards in one row
    //     const cardsInRow = Math.floor(containerWidth / cardWidth);
        
    //     // Calculate the scroll distance to show the next card
    //     const scrollDistance = cardWidth * (cardsInRow - 1);
        
    //     // Calculate the new scroll position
    //     const newPosition = scrollPosition + scrollDistance;
        
    //     // Limit the newPosition to the maximum scroll position
    //     const clampedPosition = Math.min(newPosition, maxScrollPosition);
        
    //     setScrollPosition(clampedPosition);
    //     container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    //   };
      
      

    return (
        <div className="container-fluid py-5 product bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="section-title position-relative mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0 side_arrow">
                        <i className="fa-solid single_arrow fa-angle-left fa-xl" onClick={scrollLeft}></i>
                        <i className="fa-solid single_arrow fa-angle-right fa-xl" onClick={scrollRight}></i>

                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 ">
                        <div className="row owl-carousel product-carousel" ref={containerRef}>
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
