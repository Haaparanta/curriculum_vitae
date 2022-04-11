import React from "react";
import { workExperience } from "./types";
import { workExperiences, tyokokemus } from "./data/workExperience"

const WorkPage = ({language}: {language:boolean}) => {
  const eng = workExperiences.map((workExperience) => <WorkExperienceItem key={workExperience.id} text={workExperience}/>);
  const fin = tyokokemus.map((workExperience) => <WorkExperienceItem key={workExperience.id} text={workExperience}/>);
  return (
    <ul className="list">
      {language ? eng : fin}
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