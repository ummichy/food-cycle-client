import React from 'react';
import Banner from '../Components/Banner';
import FeaturedFoods from './FeaturedFoods';

import OurApproach from './OurApproach';
import Supporters from './Supporters';
import NewsletterSubscription from './NewsletterSubscription';
import Reviews from './Reviews';
import DonationSuggestions from './DonationSuggestions';
import EngagementHub from './EngagementHub';

const Home = () => {
   
    return (
        <>
       <Banner></Banner>
       <FeaturedFoods></FeaturedFoods>
      <OurApproach></OurApproach>
      <Supporters></Supporters>
             <DonationSuggestions></DonationSuggestions>
             <EngagementHub></EngagementHub>
      <Reviews></Reviews>
      <NewsletterSubscription></NewsletterSubscription>
        </>
    );
};

export default Home;