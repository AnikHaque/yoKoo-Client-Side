import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import { TextField } from '@mui/material';

const SingleOrder = ({ order }) => {
  
    // const {service} = props;
    const { _id, name, name1,description,price, img,status } = order;
    const url =`/products/${_id}`;

    const handleUpdateUser = e => {


    }

    const handleNameChange = e => {
const updateName = e.target.value;
const updatedUser = {status:updateName};
    }
  
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
      <form onSubmit="handleUpdateUser">
      <input  type="text" onChange={handleNameChange} value={status || ''} />
      <input type="submit" value="Update"/>

    </form>
      {/* <div class="card-footer">
          
        <Link to={`/products/${_id}`}>
        <button className="btn btn-primary mx-5">Update</button>
        </Link>
        
      
    </div> */}
  </div>
</div>

</div>


        
    );
};
export default SingleOrder;