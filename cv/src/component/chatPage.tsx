import React, { useState } from "react";

import './chatPage.css';
import { googleSignIn } from "./auth";
import { auth, firestore} from "./firebase";

import { query, where, limit, getDocs, collection, doc, orderBy, onSnapshot} from "firebase/firestore";

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

function SignIn() {

  const signInWithGoogle = () => {
    googleSignIn();
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}
/*
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
*/


function ChatRoom() {

  const collectionListener = (collection: any) => {
    const collectionQuery = query(collectionRef, limit(20), orderBy("createdAt", "asc"));

    onSnapshot(collectionQuery, (querySnapshot) => {
      const messages = querySnapshot.docs.map(doc => doc.data());
      console.log(messages);
    });
  }

  collectionListener(collectionRef);
  /*
  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (auth.currentUser) {
      const { uid, photoURL } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
    }
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}


    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
  */
  return (<></>);
}


function ChatMessage({ message }: { message: any }): JSX.Element {
  const { text, uid, photoURL } = message;
  console.log(text, uid, photoURL);

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
