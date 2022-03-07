import React, { useEffect, useState } from 'react'
import './common.css'
import logo from '../Assets/Images/logo.jpg'
import { useSelector } from "react-redux";

const Header = () => {

    const [productDetails, setproductDetails] = useState({ price: 0, items: 0 })
    const productState = useSelector((state) => state.productChange);

    useEffect(() => {
        console.log(productState);
        setproductDetails({ price: productState.total, items: productState.products.length })
    }, [productState])
    

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