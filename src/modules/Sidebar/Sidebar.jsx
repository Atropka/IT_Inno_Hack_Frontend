// src/components/Sidebar.js
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import { BsFillCalendarFill, BsFillPersonFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">H&H CRM</h1>
        <ul>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <AiFillHome className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <AiFillProject className="mr-3" />
              Projects
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <BsFillCalendarFill className="mr-3" />
              Calendar
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <BsFillPersonFill className="mr-3" />
              Employees
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
              <IoMdNotifications className="mr-3" />
              Notifications
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <a href="#" className="flex items-center text-gray-700 hover:text-red-500">
            <FiLogOut className="mr-3" />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
