import React, { useRef, useState, useEffect } from 'react';


import FrontPage from './component/frontPage';
import NavBar from './component/navBar';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { QuerySnapshot } from 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBjzW-mlbaOFv1l4W0nks1QmlJmQDU8ajo",
  authDomain: "curriculum-ae45a.firebaseapp.com",
  projectId: "curriculum-ae45a",
  storageBucket: "curriculum-ae45a.appspot.com",
  messagingSenderId: "802184784136",
  appId: "1:802184784136:web:1fc3f1f815d59065e2a4bd",
  measurementId: "G-PSM3Z8SRQ7"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);

  const setPageNumberTo = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  if (pageNumber === 0) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
        <FrontPage />
      </>
    );
  } else if (pageNumber === 1) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
      </>
    );
  } else if (pageNumber === 2) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
      </>
    );
  } else if (pageNumber === 3) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
      </>
    );
  } else if (pageNumber === 4) {
    return (
      <>
        <NavBar setPageNumberTo={setPageNumberTo} />
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
