import React from 'react';
import ProjectCard from './ProjectCard'
import "./projects.css" 

function ProjectsContainer() {
  return (
    <section className="projects-container">
        <div className="section-headline">
            <div className="section-header">Projects</div>
            <span className="project-header-link">View My Github</span>
        </div>
        <div className="projects-section">
            <ProjectCard emoji={"📉"} projectTitle={"VizMock"} technologies={"Kafka, Java, JavaFX"}/>
            <ProjectCard emoji={"💽"} projectTitle={"MemDoop"} technologies={"Java, Hadoop"}/>
            <ProjectCard emoji={"👨‍💻"} projectTitle={"Algo.js"} technologies={"Javascript, React"}/>
            <ProjectCard emoji={"🧜"} projectTitle={"MermRender"} technologies={"Javascript, Node.JS"}/>
            <ProjectCard emoji={"🍦"} projectTitle={"WIPCream"} technologies={"Git, Javascript"}/>
            <ProjectCard emoji={"🧼"} projectTitle={"Simplex Lang"} technologies={"Java"}/>
        </div>
    </section>
    );
}

export default ProjectsContainer;