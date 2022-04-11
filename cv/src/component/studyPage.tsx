import React from "react";
import { StudyText, Course } from "./types";
import {studyText, OpintoText} from "./data/studyText";
import {Courses, Kurssit} from "./data/course"
import './studyPage.css';

const StudyPage = ({language}: {language:boolean}) => {
  return (
    <div className="Parent">
      <Text texts={language ? studyText : OpintoText}/>
      <ImageAndText language={language}/>
    </div>
  );
};

const ImageAndText = ({language}: {language:boolean}) => {
  const eng = Courses.map((course) => <CourseItem key={course.id} text={course}/>);
  const fin = Kurssit.map((course) => <CourseItem key={course.id} text={course}/>);
  return (
    <ul className="list2">
      <Image />
      {language ? eng : fin}
    </ul>
  );
};

const Text: React.FC<{texts: Array<StudyText>}> = ({texts}) => {
  const listItems = texts.map((text) => <Segment key={text.id} text={text}/>);
  return (
    <ul className="list1">
      {listItems}
    </ul>
  );
};

const Segment: React.FC<{text: StudyText}> = ({text}) => {
  if (text.showTitle) {
    return (
      <li className="listItemWithTitle">
        <h2>{text.title}</h2>
        <p>{text.text}</p>
      </li>
    );
  } else {
    return (
      <li className="listItem">
        <p>{text.text}</p>
      </li>
    );
  };
};

const Image = () => {
  return (
    <li className="image">
    </li>
  );
};

const CourseItem: React.FC<{text: Course}> = ({ text }) => {
  return (
    <li className="course">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
    </li>
  );
};




export default StudyPage;
