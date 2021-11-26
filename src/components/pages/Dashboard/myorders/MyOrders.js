import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import UserOrder from '../../Dashboard/userorder/UserOrder';
// import './Explore.css'


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">My Orders Total: 0{orders.length}</h1>
             <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                 {
                    orders.map(order => <UserOrder
                        key={order.id}
                        order={order}
                    ></UserOrder>)
                } 
                </div>
                </div>
            </div> 
        </div>
    );
};

export default MyOrders;