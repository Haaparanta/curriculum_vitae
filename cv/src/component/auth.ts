import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async () => {
  await signInWithPopup(auth, googleProvider)
    .then ((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
};
