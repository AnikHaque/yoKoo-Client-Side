import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';

import useAuth from '../../../../hooks/useAuth'
import Appointments from '../Appointments/Appointments';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../pay/Pay';
import MyOrders from '../myorders/MyOrders';
import Review from '../review/Review';
import AddProduct from '../add product/AddProduct';
import MakeAdmin from '../makeadmin/MakeAdmin';
import ManageProduct from '../manageproduct/ManageProduct';
import AddService from '../../addService/AddService';
import ManageOrder from '../manageorder/ManageOrder';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin,user,logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="bg-primary text-white bg-dashboard">
            <Toolbar />
            <Divider />
            
            <Link to={`${url}`}><Button className="text-white">Dashboard</Button></Link>  
                <br></br>
                {/* {
                    admin && 
                } */}

                { !admin ? <Box>
                <Link to={`${url}/pay`}><Button color="" className="text-white  mb-2 mx-1 pe-5"><i class="fas fa-shopping-cart me-2"></i>Pay</Button></Link>
                <br></br>
                <Link to={`${url}/myorders`}><Button className="text-white  mb-2 mx-1  pe-5"><i class="fas fa-user-alt me-2"></i>My Orders</Button></Link>
                <br></br>
                <Link to={`${url}/review`}><Button className="text-white  mb-2 mx-1 pe-5"><i class="fas fa-star-half-alt me-2"></i> Review</Button></Link>
                <br></br>
                <Link to="/home">
                <Button onClick={logOut} className="text-white  mb-2 mx-1 pe-5"><i class="fas fa-sign-out-alt me-2"></i>LogOut</Button>
                </Link>
                </Box>
                :
                <Box>
                        <Link to={`${url}/addproduct`}><Button className="text-white mx-1 mb-2 "><i class="far fa-plus-square me-2"></i>Add a Product</Button></Link>
                <br></br>
                <Link to={`${url}/makeadmin`}><Button className="text-white mx-1 mb-2 "><i class="fas fa-user-cog me-2"></i> Make Admin</Button></Link>
                <br></br>
                <Link to={`${url}/manageproduct`}><Button className="text-white mb-2 mx-1 "><i class="fas fa-tasks me-2"></i> Manage Product</Button></Link>
                <Link to={`${url}/manageorder`} className="adminLink fs-1"><Button className="text-white mx-1 mb-2"> <i class="fas fa-tasks me-2"></i> Manage order</Button></Link>
                <br></br>
                <Link to="/home">
                <Button onClick={logOut} className="text-white mx-1 px-3 pe-3"><i class="fas fa-sign-out-alt me-2"></i>LogOut</Button>
                </Link>
                
                        </Box>
}
                
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageproduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageorder`}>
            <ManageOrder></ManageOrder>
                    </Route>
                    
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;