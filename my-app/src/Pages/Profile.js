import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Download from '../components/Download';

const Profile = () => {
    const navigate = useNavigate()
    navigate("/product")
    return (
        <div>
            <h1>profile is here baby!!!</h1>
            <ul>
                <li><Link to="/profile/dashboard">Dashboard</Link></li>
                <li><Link to="/profile/download">Download</Link></li>
            </ul>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="download" element={<Download />} />
            </Routes>
        </div>
    );
};

export default Profile;