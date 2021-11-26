import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
// import './Explore.css'
import useAuth from '../../../hooks/useAuth';


const HomeService = () => {
    const [products, setProducts] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="services" className="pt-3 pb-5 mt-5">
            <h1 className="fw-bold mt-2 text-center mb-5">Our Products</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.slice(0,8).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeService;