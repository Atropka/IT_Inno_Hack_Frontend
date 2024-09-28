// src/components/ProjectsHeader.js
import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-2 top-2 text-gray-400" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600">
          <FiPlus className="mr-2" />
          Add Project
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
