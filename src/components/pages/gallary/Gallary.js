import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Gallary.css'
import Footer from '../footer/Footer'

const Gallary = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className="bg-gallary">
                </div>
        <Grid container spacing={2} className="mt-3">
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <img src="https://www.vhv.rs/dpng/d/445-4453697_hero-dtb-plus-cycle-hd-png-download.png" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://p4.wallpaperbetter.com/wallpaper/871/336/40/sports-bicycle-wallpaper-preview.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://images.pexels.com/photos/1208777/pexels-photo-1208777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://live.staticflickr.com/321/19536286905_bf7a115525_b.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://c1.wallpaperflare.com/preview/134/271/586/people-adventure-bicycle-bicycles.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoAfN_GdJcjRvDf_j1OkOl5EI8GqNwMf5rg&usqp=CAU" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOO2WhSOHH5regol8SHxLrq_WFxOO91MYVcQ&usqp=CAU" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://c0.wallpaperflare.com/preview/144/741/180/bike-two-wheeled-vehicle-wheel-nostalgia.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://swall.teahub.io/photos/small/338-3388901_woman-with-a-bicycle-wallpaper-girls-hd-wallpaper.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://swall.teahub.io/photos/small/37-375950_electric-bike-by-audi-modern-design-e-bike.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCfxs7NGS7bM4Is1SjAjGI0UUPCb3sJwxSMg&usqp=CAU" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://wallpaperaccess.com/full/1223017.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://wallpapercave.com/wp/wp3345620.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://p4.wallpaperbetter.com/wallpaper/871/762/464/5bd4b4a67d779-wallpaper-preview.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://images.pexels.com/photos/128202/pexels-photo-128202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://cdn7.dissolve.com/p/D1583_16_531/D1583_16_531_1200.jpg" className="img-fluid"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
          <img src="https://p4.wallpaperbetter.com/wallpaper/428/397/264/5bd2f31d3af82-wallpaper-preview.jpg" className="img-fluid"></img>
          </Grid>
          
        </Grid>
        <Footer></Footer>
      </Box>
    );
};

export default Gallary;