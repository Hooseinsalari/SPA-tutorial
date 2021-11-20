import React from 'react';
import { Link, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Download from '../components/Download';

const Profile = () => {
    return (
        <div>
            <h1>profile is here baby!!!</h1>
            <ul>
                <li><Link to="/profile/dashboard">Dashboard</Link></li>
                <li><Link to="/profile/download">Download</Link></li>
            </ul>
            <Route path="/profile/dashboard" component={Dashboard} />
            <Route path="/profile/download" component={Download} />
        </div>
    );
};

export default Profile;