import React from 'react';
import './EventCard.scss'

const EventCard = ({ title, time, duration, status }) => {
    return (
        <div className={`event-card ${status}`}>
            <div className="event-info">
                <h3>{title}</h3>
                <p>{time}</p>
            </div>
            <div className="event-meta">
                <span className="duration">{duration}</span>
                <span className={`status-icon ${status}`}></span>
            </div>
        </div>
    );
};

export default EventCard;