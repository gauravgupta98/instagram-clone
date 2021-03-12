import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDQAVbeVzYKdCUNwkCGLp7dlT1RG6A-MN8",
  authDomain: "instagram-clone-a159b.firebaseapp.com",
  projectId: "instagram-clone-a159b",
  storageBucket: "instagram-clone-a159b.appspot.com",
  messagingSenderId: "221795454491",
  appId: "1:221795454491:web:ae1e8ab80fe5c15f9a72be",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore();

//run this only once!!!
//seedDatabase(firebase);

export { firebase, FieldValue };
