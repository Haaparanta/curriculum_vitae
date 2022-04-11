import React, { useState } from 'react';

import NavBar from './component/navBar';
import FrontPage from './component/frontPage';
import StudyPage from './component/studyPage';
import ProjectPage from './component/projectPage';
import WorkPage from './component/workPage';
import ChatPage from './component/chatPage';


function App(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const [language, setLanguage] = useState(true); // true = english, false = Finnish

  const setPageNumberTo = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < 100) {
      setPageNumber(pageNumber);
    } else {
      if (pageNumber === 100) {
        setLanguage(true);
      } else {
        setLanguage(false);
      }
    }
  };

  console.log(pageNumber);

  if (pageNumber === 0) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <FrontPage language={language}/>
      </>
    );
  } else if (pageNumber === 1) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <StudyPage />
      </>
    );
  } else if (pageNumber === 2) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <ProjectPage />
      </>
    );
  } else if (pageNumber === 3) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <WorkPage />
      </>
    );
  } else if (pageNumber === 4) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <ChatPage/>
      </>
    );
  } else {
    return (
      <>
        <h1>Error 404</h1>
      </>
    );
  }
}

export default App;
