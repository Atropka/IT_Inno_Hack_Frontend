import React, {useState, useEffect} from 'react';
import './Projects.scss'

import ProjectCard from "../ProjectCard/ProjectCard";
import Sidebar from "../Sidebar/Sidebar";
import Header from '../Header/Header';
import {useNavigate} from "react-router-dom";

const Projects = () => {

    const navigate = useNavigate()

    const [projects, setProjects] = useState([])

    const onClickProjectDetails  = (id) => {
        navigate(`/project/${id}`)
    }




    useEffect(() => {
        fetch('https://6751ed9c006626.lhr.life/v1/projects')
            .then((response) => response.json())
            .then((json) =>{
                setProjects(json.data)
            })
            .catch((err) => console.log(err));
    }, [])

    console.log(projects)



    return (
        <div className="dashboard">
            <Sidebar/>
            <div className="content">
                <Header title="Projects" buttonText="Add Project"/>
                <section className="nearest-events">
                    <div className="events-list">
                        {projects.length ?
                            projects.map((obj, index) => (
                                <ProjectCard
                                    {...obj}
                                    onClickProjectDetails={onClickProjectDetails}
                                />
                            )) :
                            'Projects is empty'
                        }
                        {/*<ProjectCard*/}
                        {/*    title="Meeting with CTO"*/}
                        {/*    time="Sep 30 | 12:00 PM"*/}
                        {/*    duration="1h"*/}
                        {/*    status="up"*/}
                        {/*/>*/}
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Projects;