import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBjzW-mlbaOFv1l4W0nks1QmlJmQDU8ajo",
  authDomain: "curriculum-ae45a.firebaseapp.com",
  projectId: "curriculum-ae45a",
  storageBucket: "curriculum-ae45a.appspot.com",
  messagingSenderId: "802184784136",
  appId: "1:802184784136:web:1fc3f1f815d59065e2a4bd",
  measurementId: "G-PSM3Z8SRQ7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;
