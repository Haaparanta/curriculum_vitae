import React from 'react';
import FrontPage from './component/frontPage';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrontPage />
      </header>
    </div>
  );
}

export default App;
