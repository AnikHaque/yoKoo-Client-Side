import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography
} from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './productDetail.css';
import Footer from '../footer/Footer'

const productdetailsImage = {
    width:'700px'
}


const ProductDetail = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://fast-reaches-25590.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data.status="pending";
        console.log(data);
        axios.post("https://fast-reaches-25590.herokuapp.com/orders",data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Added Successfully");
                reset();
                
            }
        })
    } 
    return (
        <div> 
            <div className="product-detail mt-3 mb-5"></div>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
            <Typography>
            
          <img style={productdetailsImage} src={product.img}></img>
          <h4 className="text-center">{product.name}</h4>
          <p className="text-center">{product.description}</p>
          <h2 className="text-center">Price: {product.price} Taka</h2>
          </Typography>
        </Grid>
        <Grid item xs={7}>
          

        <h1 className="text-center fw-bold">Add a Product</h1>
        <h5 className="text-center">**Order from : <b>{user.email}**</b></h5>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name"  defaultValue={user.displayName} />
<br></br>
<br></br>
      <input {...register("name1", { required: true, maxLength: 20 })} placeholder="Product Name" defaultValue={product.name}/>
<br></br>
<br></br>
      <input {...register("email", { required: true, maxLength: 20 })} placeholder="Email" defaultValue={user.email}/>
      <br></br>
      <br></br>
      <textarea {...register("description")} placeholder="Provide Delivery Address"/>
      <br></br>
      <br></br>
      
      <input type="number" {...register("price")}placeholder="Phone Number"/>
      <br></br>
      <br></br>
      <input type="number" {...register("price")}placeholder="Price"/>
      <br></br>
      <br></br>
      
      <input {...register("img")} placeholder="Product image url"/>
      <br></br>
      <br></br>
      
      <input type="submit" value="Place Order" />
    </form>



        </Grid> 
      </Grid>
    </Box>
    <Footer></Footer>
</div>
    );
};

export default ProductDetail;