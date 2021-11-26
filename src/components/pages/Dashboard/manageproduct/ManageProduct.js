import React, { useEffect, useState } from 'react';
import SingleProduct from '../../singleProduct/SingleProduct'
// import './Explore.css'


const ManageProduct = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Manage Products</h1>
            <div className="service-container bg-dark pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    order.map(everyorder => <SingleProduct
                        key={order.id}
                        everyorder={everyorder}
                    ></SingleProduct>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;