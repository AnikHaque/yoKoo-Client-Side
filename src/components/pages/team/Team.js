import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import team1 from '../../../images/image-copyright-47-760x590.jpg'
import team2 from '../../../images/image-copyright-48-760x590.jpg'
import team3 from '../../../images/image-copyright-49-760x590.jpg'
import team4 from '../../../images/image-copyright-50-760x590.jpg'
import team5 from '../../../images/image-copyright-51-1-760x590.jpg'
import team7 from '../../../images/image-copyright-52-760x590.jpg'
import bg from '../../../images/banner.jpg';
import Footer from '../footer/Footer';

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
const Team = () => {
    return (
        
       
      
        <Box sx={{ flexGrow: 1 }}>
             <Grid style={bannerBg} container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
           <Typography>
           <h1 style={bannerText}>Meet Our <br></br>Hardworker Team</h1>
           </Typography>
          </Grid>
          
        </Grid>

        <Grid container spacing={2} className="mt-3">
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Thomas Gilbert
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Logistics Manager
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team7}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Thomas J. White

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Operations Manager

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Samantha Black

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Master Mechanic

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          James Wilson
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Master Mechanic
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Jenny Wallace

          </Typography>
          <Typography variant="body2" color="text.secondary">
          Operarions Manager
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={team5}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mary Dalton

          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sales Manager
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/260428646_2704481899854627_3382513282237637237_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGTIta6dsNj4AqixV2GJwtn_jpOAVhN4aP-Ok4BWE3ho2a2_hZNpfEjB5LQLnxI31N0h2WifiA7u2P0blS6dlaQ&_nc_ohc=S_o4c9WAEp8AX9kKmu-&_nc_ht=scontent.fdac22-1.fna&oh=40c72b8bd691e7569a1590cd721039f5&oe=61A41381"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Maisha Akter
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Account Expert
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/243305019_1355251301555928_8713088947367784720_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGJbVYUVtSAKLbU67_-eAhBGFs-nQE-6qoYWz6dAT7qqna6VqPKP5tVBmFqC6BbK5F4w0rZbRnELWSd-qTLI1fO&_nc_ohc=MG_9Ykmwo5sAX8m1XKX&tn=RL3Vk_JvgiPLs03h&_nc_ht=scontent.fdac22-1.fna&oh=50a06f71dc12bddd5ff087c0fca7e62a&oe=61A2F7F2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ekramul Haque
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Content Writter
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t31.18172-8/22048115_900161716816966_6538136707260744164_o.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeELFMHOuE0jxe__H91Js-4oGTvlimAhupoZO-WKYCG6mjKsCsel4R6DLqlbybeyTcu8LsTZara3TqJQ0gB58IOS&_nc_ohc=L_RniCyRKKEAX_3oY_2&_nc_ht=scontent.fdac22-1.fna&oh=d34af65d77648ffa931e95ab1a1d03d1&oe=61C5F6F8"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Abdullah Al Mamun
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Marketing Expert
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/35806850_475031319593125_1930872860826402816_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeG6FCHE1xcz-nR4dIuxIVtQ517WjZkAXD3nXtaNmQBcPdBK7avTHLUQq9jcBDCpCCgLmgrQ5EyEnBa-xH4EvAss&_nc_ohc=EChoYxT4toMAX8Psv4u&_nc_ht=scontent.fdac22-1.fna&oh=906bc49c2de47848f0725505e4b616c5&oe=61C5A786"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jannatul Mahiya Mutasha
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Front End Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/50931794_769912276713152_7208063688106835968_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGaVpt16C6Fw14FrR4JHwo8mu9zaKT1792a73NopPXv3QKTDSoT0IqOyoZeDzHY-3tfVAkLkS_aD_YHk4wUBEvA&_nc_ohc=aqw11Od1WesAX_1fEHn&tn=RL3Vk_JvgiPLs03h&_nc_ht=scontent.fdac22-1.fna&oh=ef6cffa340dfef4acec59281f860dc6b&oe=61C36701"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Darklight Nishu
          </Typography>
          <Typography variant="body2" color="text.secondary">
          System Analyst
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/219261467_3024765851115911_4364332063507732882_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF0onjDxdYXjR9hY2kPpirLHhuzxn6Jm9YeG7PGfomb1nb1C_QiQpbmK6wELDZCy-wK5gXaJ-yAI3BUaac437m6&_nc_ohc=rjPEjwKyehoAX8a_kdA&_nc_ht=scontent.fdac22-1.fna&oh=a632329835c3d151b3e4b2ddf4965454&oe=61A4435F"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Abdullah Al Akash
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Backend Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
          </Grid>
          
          
        </Grid>
        <Footer></Footer>
      </Box>
    );
};

export default Team;