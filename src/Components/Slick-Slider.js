import React from 'react'
import './common.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Items from '../Utils/sliderItems.json';

const SlickSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider_container'>
            <Slider {...settings}>
                {
                    Items ?
                        Items.map(d => {
                            return (
                                <ItemContainer data={d} key={d.id} />
                            )
                        })
                        : "Loading"
                }
            </Slider>
        </div>
    )
}

export default SlickSlider

const ItemContainer = ({ data }) => {

    return (
        <div>
            <img src={require(`../Assets/Images/Silder/${data.url}`)} alt={data.name} className="Slider_img" />
        </div>
    )
}