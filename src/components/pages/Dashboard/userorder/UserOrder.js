import React from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';

const UserOrder = ({ order }) => {
    // const {service} = props;
    const { _id, name, name1,description,price, img } = order;
    const url =`/products/${_id}`;
    return (
        <div>
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h6 class="card-title text-center"><b>Ordered By:</b>{name}</h6>
        <h6 class="text-center"><b>Product ordered:</b>{name1}</h6>
        <p class="card-text text-center"><b>Delivery Address:</b>{description}</p>
        <h4 className="text-center">{price} Taka</h4>
        
      </div>
    </div>
        
      </div>
    </div>
  



        
    );
};
export default UserOrder;