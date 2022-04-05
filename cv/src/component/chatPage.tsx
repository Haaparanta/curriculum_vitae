import React, { useState } from "react";

import './chatPage.css';
import { googleSignIn } from "./auth";
import { auth, firestore} from "./firebase";

import { query, limit, collection, orderBy, onSnapshot} from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";


const collectionRef = collection(firestore, "messages");

const ChatPage = () => {
  const user = auth.currentUser;
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
};

/*
import { signOut } from "firebase/auth";
const Room = () => {
  return (
    <>
      <SignOut/>
      <ChatRoom />
    </>
  );
};

const signOutUser = async () => {
  console.log('signing out');
  await signOut(auth)
    .then(() => {
      console.log("signed out");
    })
    .catch ((error) => {
      console.log(error);
    });
};

function SignOut() {
  return auth.currentUser && (
    <button className="signOut" onClick={() => signOutUser}>Sign Out</button>
  )
}
*/

function SignIn() {

  const signInWithGoogle = () => {
    googleSignIn();
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}




function ChatRoom() {
  const [messages, setMessages]: any = useState([]);
  const collectionListener = (collection: any) => {
    const collectionQuery = query(collectionRef, limit(20), orderBy("createdAt", "desc"));

    onSnapshot(collectionQuery, (querySnapshot) => {
      const data = querySnapshot.docs.map(doc => doc.data());
      setMessages(data.reverse());
    });
  }
  if (messages.length === 0) {
    collectionListener(collectionRef);
  };

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (auth.currentUser) {
      const { uid, photoURL } = auth.currentUser;
      await addDoc(collectionRef,{
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
    }
  }

  return (
  <>

    <main>

      {messages && messages.map((msg: { id: React.Key | null | undefined; }) => <ChatMessage key={msg.id} message={msg} />)}

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>
  );
}


function ChatMessage({ message }: { message: any }): JSX.Element {
  const { text, uid, photoURL } = message;

  if (auth.currentUser) {
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt="" />
        <p>{text}</p>
      </div>
    </>)
  } else {
    return (<></>)
  }
}

export default ChatPage;
