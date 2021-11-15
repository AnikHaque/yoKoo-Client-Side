import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';

const product = ({ product }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = product;
    const url =`/products/${_id}`;
    return (
        <div>
            {/* <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">View {name.toLowerCase()}</button>
            </Link> */}


  <div class="col">
    <div class="card h-100 card-bg">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center">{name}</h5>
        <p class="card-text text-center">{description}</p>
        <h4 className="text-center">{price} Taka</h4>
      </div>
      <div class="card-footer">
          
        <Link to={`/products/${_id}`}>
        <button className="btn btn-primary mx-5">View Details</button>
        </Link>
        
      
    </div>
  </div>
</div>
</div>


        
    );
};
export default product;