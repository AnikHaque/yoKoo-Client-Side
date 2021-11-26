import Navigation from './components/navigation/Navigation';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from '../src/components/pages/home/Home';
import About from '../src/components/pages/about/About';
import Explore from '../src/components/pages/explore/Explore';
import AddService from './components/pages/addService/AddService';
import ProductDetail from './components/pages/productDetail/ProductDetail';
import Login from './components/pages/login/Login';
import Register from './components/pages/login/register/Register';
import AuthProvider from './context/authprovider/AuthProvider';
import PrivateRoute from './components/pages/login/privateRoute/PrivateRoute';
import Dashboard from './components/pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './components/pages/Dashboard/DashboardHome/DashboardHome';
import Team from './components/pages/team/Team';
import Gallary from './components/pages/gallary/Gallary';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route exact path="/home">
         <Home></Home>
        </Route>
        <Route exact path="/team">
        <Team></Team>
        </Route>
        <Route exact path="/gallary">
        <Gallary></Gallary>
        </Route>
        
        <Route exact path="/about">
         <About></About>
        </Route>
        
        <Route exact path="/explore">
         <Explore></Explore>
        </Route>
        <Route  path="/dashboard">
         <Dashboard></Dashboard>
        </Route>
        <Route  path="/dashboardhome">
         <DashboardHome></DashboardHome>
        </Route>
        <Route exact path="/addservice">
         <AddService></AddService>
        </Route>
        <PrivateRoute path="/products/:id">
              <ProductDetail></ProductDetail>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
              </Route>
            <Route exact path="/register">
              <Register></Register>
              </Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
