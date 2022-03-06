import React, { useState } from 'react'
import './common.css'
import logo from '../Assets/Images/logo.jpg'
// import { useSelector } from "react-redux";
import store from '../Redux/store'

const Header = () => {

    const [productDetails, setproductDetails] = useState({ price: 0, items: 0 })
    // const productState = useSelector((state) => state.productChange);

    store.subscribe(() => {
        const state = store.getState().productChange
        setproductDetails({ price: state.total, items: state.products.length })
    });
    
    // Ye Work Nahi kr rha mere previous project mai work kr rha h
    // useEffect(() => {
    //     console.log(productState);
    //     setproductDetails({ price: productState.total, items: productState.products.length })
    // }, [productState])
    

    return (
        <div className='header_container'>
            <img src={logo} alt="logo" className="header_image" />
            <label className="header_label">Welcome to YK Shopping Center</label>
            <div className='header_cart_container'>
                <label>Cart - </label>
                <label className='cart_price'>${productDetails.price}</label>
                <i className="fas fa-shopping-cart"></i>
                <label className='cart_items'>{productDetails.items}</label>
            </div>
        </div>
    )
}

export default Header