import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner></HeroBanner>
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
