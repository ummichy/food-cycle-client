import React from 'react';
import Banner from '../Components/Banner';
import FeaturedFoods from './FeaturedFoods';

import OurApproach from './OurApproach';
import Supporters from './Supporters';

const Home = () => {
    //  const services = fetch('http://localhost:3000/services').then(res=>res.json())
    return (
        <>
       <Banner></Banner>
       <FeaturedFoods></FeaturedFoods>
      <OurApproach></OurApproach>
      <Supporters></Supporters>
        </>
    );
};

export default Home;