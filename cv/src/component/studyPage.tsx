import React from "react";
import studyText from "./data/studyText";
import { StudyText } from "./types";
import './studyPage.css';

const StudyPage = () => {
  return (
    <div className="Parent">
      <Text texts={studyText}/>
      <ImageAndText/>
    </div>
  );
};

const ImageAndText = () => {
  return (
    <ul className="list2">
      <Image />
    </ul>
  );
};

const Image = () => {
  return (
    <li className="image">
    </li>
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
  console.log(text.id);
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






export default StudyPage;
