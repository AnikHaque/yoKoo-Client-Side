import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Product from '../product/Product';
// import './Explore.css'
import bg from '../../../images/banner.jpg';
import { Grid, Typography } from '@mui/material';

const bannerBg={
    background:`url(${bg})`,
     backgroundPosition:'left',
    backgroundSize:'cover',
    height:'80vh'
}
const bannerText={
    fontSize:'75px',
    color:'white',
    fontWeight:'bolder',
    textAlign:'center',
    marginTop:'50px'

}

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
       
        <div id="services">
             <Grid style={bannerBg} container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
           <Typography>
           <h1 style={bannerText}>Explore Our  <br></br>Products and Buy</h1>
           </Typography>
          </Grid>
          
        </Grid>
            <h1 className="fw-bold mt-5 text-center mb-5">Our Products</h1>
            <div className="service-container bg-dark pb-5 pt-5">
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