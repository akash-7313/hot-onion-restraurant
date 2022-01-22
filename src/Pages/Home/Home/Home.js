import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import FoodNav from '../Food/FoodNav/FoodNav';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <FoodNav></FoodNav>
        <ChooseUs></ChooseUs>
      </div>
    );
};

export default Home;