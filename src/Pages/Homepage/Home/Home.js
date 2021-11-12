import React from 'react';
import Shop from '../../Shop/Shop';
import Banner from '../Banner/Banner';
import MenAndWomenBanner from '../MenAndWomenBanner/MenAndWomenBanner';

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <br/>
            <Banner></Banner>
            <br/>
            <Shop></Shop>
            <br/>
            <MenAndWomenBanner></MenAndWomenBanner>
            
        </div>
    );
};

export default Home;