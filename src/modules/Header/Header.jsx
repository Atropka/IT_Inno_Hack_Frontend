import React from 'react';
import {GrNotification} from "react-icons/gr";

export default function Header() {
    return (
        <div className="top-bar">
            <a className="notifications flex items-center text-gray-700 hover:text-blue-500 p-2 bg-white hover:bg-gray-200 rounded-lg mr-4 cursor-pointer">
                <GrNotification className="w-6 h-6"/>
            </a>
            <div
                className="user-info flex items-center text-gray-700 hover:text-blue-500 p-2 bg-white hover:bg-gray-200 rounded-lg m-0 cursor-pointer">
                <img src="profile_icon.png" alt="Profile" className="w-8 h-8 rounded-full mr-2"/>
                <span>Evan Yates</span>
            </div>
        </div>
    );
}
