import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Product from '../product/Product';
// import './Explore.css'


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fast-reaches-25590.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="services">
            <h1 className="fw-bold mt-2 text-center mb-5">Our Products</h1>
            <div className="service-container">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
    
};

export default Explore;