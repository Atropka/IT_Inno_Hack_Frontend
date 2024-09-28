import React from 'react';
import './Projects.scss'

import EventCard from "../EventCard/EventCard";
import Sidebar from "../Sidebar/Sidebar";
import Header from '../Header/Header';

const Projects = () => {
    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="content">
                <Header/>
                <section className="nearest-events">
                    <div className="header">
                        <h2>Projects</h2>
                        <button className="add-event">+ Add Event</button>
                    </div>
                    <div className="events-list">
                        <EventCard
                            title="Presentation of the new department"
                            time="Today | 6:00 PM"
                            duration="4h"
                            status="up"
                        />
                        <EventCard
                            title="Anna's Birthday"
                            time="Today | 5:00 PM"
                            duration="2h"
                            status="down"
                        />
                        <EventCard
                            title="Meeting with Development Team"
                            time="Tomorrow | 5:00 PM"
                            duration="4h"
                            status="up"
                        />
                        <EventCard
                            title="Ray's Birthday"
                            time="Tomorrow | 2:00 PM"
                            duration="1h 30m"
                            status="down"
                        />
                        <EventCard
                            title="Meeting with CEO"
                            time="Sep 14 | 5:00 PM"
                            duration="1h"
                            status="up"
                        />
                        <EventCard
                            title="Movie night (Tenet)"
                            time="Sep 15 | 5:00 PM"
                            duration="3h"
                            status="down"
                        />
                        <EventCard
                            title="Lucas's Birthday"
                            time="Sep 29 | 5:30 PM"
                            duration="2h"
                            status="down"
                        />
                        <EventCard
                            title="Meeting with CTO"
                            time="Sep 30 | 12:00 PM"
                            duration="1h"
                            status="up"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Projects;