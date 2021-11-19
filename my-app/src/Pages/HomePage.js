import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    return (
        <div>
            {/* {console.log(props)} */}
            <h1>HomePage</h1>
            <Link to="/about-us" >go to about us</Link>
        </div>
    );
};

export default HomePage;