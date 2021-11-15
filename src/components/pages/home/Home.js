import React from 'react';
import ManageReview from '../../manageReview/ManageReview';
import Star from '../../Star';
import Banner from '../banner/Banner';
import CycleRepair from '../cycleRepair/CycleRepair';
import Footer from '../footer/Footer';
import HomeService from '../homeService/HomeService';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeService></HomeService>
           <CycleRepair></CycleRepair>
           
           <ManageReview></ManageReview>
           <Footer></Footer>
        </div>
    );
};

export default Home;