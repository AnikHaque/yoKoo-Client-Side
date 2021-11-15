import React from 'react';
import { Link } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import ReactStars from "react-rating-stars-component";




const SingleOrder = ({ review }) => {
    // const {service} = props;
    const { _id, name,description,price, img } = review;

    
    

    const firstExample = {
      size: 30,
      value:price,
      edit: false
    };
    
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
      
    );
          
          };
        
          
export default SingleOrder;