import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";

import './ProjectTasks.scss'
import Task from "../Task/Task";

const ProjectTasks = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('https://016a-109-71-177-12.ngrok-free.app/v1/projects/H%26h/tasks')
            .then((res) => (res.json()))
            .then((json) => {
                console.log(json.data)
            })
            .catch(err => {
                console.warn(err)
            })
    }, [])




    return (
        <div className="tasks-container">
            <Sidebar/>
            <main className="content">
                <header className="header">
                    <input type="search" placeholder="Search" className="search-bar"/>
                    <div className="user-info">
                        <button className="notification-btn">
                            <img src="notification_icon.svg" alt="Notifications"/>
                        </button>
                        <span className="user-name">Evan Yates</span>
                    </div>
                    <button className="add-task-btn">+ Add Task</button>
                </header>
                <section className="task-details">
                    <div className="task-list">
                        <h3>Current Projects</h3>
                        <ul>
                            <li>Medical App (iOS native)</li>
                            <li>Food Delivery Service</li>
                            <li>Fortune Website</li>
                            <li>Planner App</li>
                            <li>Time Tracker - Personal Account</li>
                            <li>Internal Project</li>
                        </ul>
                    </div>
                    <Task/>
                </section>
            </main>
        </div>
    );
};

export default ProjectTasks;