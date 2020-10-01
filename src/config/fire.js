import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZ8NJbgUHmL-rQZLhCzmfJRlz-omlWrRQ",
  authDomain: "work-70905.firebaseapp.com",
  databaseURL: "https://work-70905.firebaseio.com",
  projectId: "work-70905",
  storageBucket: "work-70905.appspot.com",
  messagingSenderId: "903588344582",
  appId: "1:903588344582:web:142b0e12655ef84402e487",
  measurementId: "G-F0R7070MVG"
};
const fire=firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export default fire;

