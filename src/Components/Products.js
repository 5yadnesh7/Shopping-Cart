import React from 'react'
import './common.css'
import Items from '../Utils/products.json';
import { useDispatch } from "react-redux";
import { AddProduct } from '../Redux/action';

const Products = () => {

    return (
        <div className='product_container'>
            {
                Items ?
                    Items.map(d => {
                        return (
                            <ProductItem data={d} key={d.id} />
                        )
                    })
                    : "Loading"
            }
        </div>
    )
}

export default Products

const ProductItem = ({ data }) => {

    const dispatch = useDispatch();

    return (
        <div className='product_item'>
            <img src={require(`../Assets/Images/Products/${data.url}`)} alt={data.name} className="product_img" />
            <label className="product_item_label">{data.name} $ {data.price}</label>
            <button onClick={() => dispatch(AddProduct(data))} className="product_item_button">
                Add to Cart
            </button>
        </div>
    )
}