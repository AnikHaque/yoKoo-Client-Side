import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import SingleOrder from '../../singleorder/SingleOrder'
// import './Explore.css'


const ManageOrder = (e) => {
    const [orders, setOrders] = useState([])
    const [status,setStatus] = useState("")

    const handleStatus = (e) => {
setStatus(e.target.value);
    }
    console.log(status);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleUpdate =(id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
body:JSON.stringify({status}),
        })
        console.log(id);
    }

   

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Manage All Orders</h1>
              <div className="service-container bg-dark pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {orders.map((pd, index) => (

<div class="col">
    <div class="card h-100">
      <img src={pd.img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h6 class="card-title text-center"><b>Ordered By:</b>{pd.name}</h6>
        <h6 class="text-center"><b>Product ordered:</b>{pd.name1}</h6>
        <p class="card-text text-center"><b>Delivery Address:</b>{pd.description}</p>
        <h4 className="text-center">{pd.price} Taka</h4>
      </div>
      <form onSubmit="handleUpdateUser">
      <input className=" px-2 mx-4" type="text" onChange={handleStatus} defaultValue={pd.status} />
      <Button onClick={()=>handleUpdate(pd._id)} className="btn btn-success bg-success mx-5 px-5 mt-2">Update</Button>
    </form>
       
</div>
</div>
  ))}
                </div>
                </div>
             </div>



  




</div>

        
    );
   
};

export default ManageOrder;