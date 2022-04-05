import React from "react";
import { workExperience } from "./types";
import  workExperiences  from "./data/workExperience"

const WorkPage = () => {
  const listItems = workExperiences.map((workExperience) => <WorkExperienceItem key={workExperience.id} text={workExperience}/>);
  return (
    <ul className="list">
      {listItems}
    </ul>
  );
}

const WorkExperienceItem: React.FC<{text: workExperience}> = ({ text }) => {
  return (
    <li className="listItem">
      <a href={text.link} target="_blank" rel="noreferrer">
        <h2>Job title: {text.position}</h2>
        <h3>Company: {text.company}</h3>
        <p>Start date: {text.startDate}</p>
        <p>End date: {text.endDate}</p>
      </a>
    </li>
  );
};

export default WorkPage;