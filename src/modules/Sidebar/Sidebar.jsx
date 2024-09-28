import React from 'react';
import './Sidebar.scss'
const Sidebar = () => {



    return (
        <div className="sidebar">
            <div className="logo">Logo</div>
            <nav>
                <ul>
                    <li className="active">Projects</li>
                    <li>Dashboard</li>
                    <li>Diagram</li>
                </ul>
            </nav>
            <button className="logout">Logout</button>
        </div>
    );
};

export default Sidebar;