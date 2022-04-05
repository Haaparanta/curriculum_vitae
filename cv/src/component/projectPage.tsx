import React from "react";
import { ProjectText } from "./types";
import Projects from "./data/projectText";
import "./projectPage.css";


const ProjectPage = () => {
  const listItem = Projects.map((project: ProjectText) => <ProjectItem key={project.id} text={project} />);
  return (
    <ul className="project-list">
      {listItem}
    </ul>
  );
};

const ProjectItem: React.FC<{text: ProjectText}> = ({ text }) => {
  return (
    <li className="project-list-item">
      <a href={text.link} target="_blank" rel="noreferrer">
        <h3>{text.title}</h3>
        <p>{text.text}</p>
      </a>
    </li>
  );
};



export default ProjectPage;
