import React from 'react';
import Banner from '../Banner/Banner';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import MenAndWomenBanner from '../MenAndWomenBanner/MenAndWomenBanner';
import SixProducts from '../Products/SixProducts';

const Home = () => {
    
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <br/>
            <Banner></Banner>
            <br/>
            <SixProducts></SixProducts>
            <br/>
            <MenAndWomenBanner></MenAndWomenBanner>
            <DisplayReviews></DisplayReviews>
            
        </div>
    );
};

export default Home;