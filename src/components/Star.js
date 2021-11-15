import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick-theme.css";


const Star = ({ review }) => {
    const { _id, name,description,price, img } = review;
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

      const firstExample = {
        size: 30,
        value:price,
        edit: false
      };

    return (
        <div>        
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
          <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h6 class="card-title text-center">{name}</h6>
        <h6 class="text-center"></h6>
        <p class="card-text text-center">"{description}"</p>
        
      <ReactStars {...firstExample} />
      </div>
      <div class="card-footer"> 
      
    </div>
  </div>
</div>
          </div>
          
        </Slider>
      </div>
    );
  }




        


export default Star;