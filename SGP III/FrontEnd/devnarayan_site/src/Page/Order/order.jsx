import './order.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';


export default function Order() {

    const {user} = useSelector(state => state.user);
    console.log(user,"User");
    const { cartItems,total } = useSelector(state => state.cart);
    let count = 0;
   
    const showProduct = cartItems.map((m) => {
       count+=1;
       return (
           <OrderItem key={m.productId} count={count} m={m}/>
       )
    })

    
    return (
        <>
            <Navbar />
            <Header pageTitle="Order" breadcrumbs={['Home', 'Order']} />
            <div className="order">
                <h1>Order Details</h1>
                <div className="details">
                    <div className="productList">
                        <h3>Customer's Cart</h3>
                        <br />
                        {showProduct}
                    </div>
                    <div className="usedetails">
                        <h3>Customer</h3>
                        <br />
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                        <h5>{user.mobile_number}</h5>
                        <br />
                        <hr />
                        <br />
                        <h4> Address </h4>
                        <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Address</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age">
                                <MenuItem value={"newShreedep"}>NEW SHREEDEP</MenuItem>
                                <MenuItem value={"nisrag"}>NISRAG</MenuItem>
                                <MenuItem value={"prince"}>PRINCE</MenuItem>
                                <MenuItem value={"darshan"}>DARSHAN</MenuItem>
                                <MenuItem value={"om"}>OM</MenuItem>
                                <MenuItem value={"girls'sHostel"}>GIRL'S HOSTEL(CHARUSAT CAMPUS)</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h4>Summary</h4>
                        <br />
                        <span className='d-flex justify-content-between'>
                            <p>Subtotal</p>
                            <p>{total}</p>
                        </span>
                        <span className='d-flex justify-content-between'>
                            <p>Tax</p>
                            <p>0.00</p>
                        </span>
                        <hr />
                        <span className='d-flex justify-content-between'>
                            <p>Total</p>
                            <p>{total}</p>
                        </span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
