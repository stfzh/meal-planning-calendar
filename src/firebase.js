import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6MeQOEUZ4c9p41_prrq9yMFealUh4UFQ",
  authDomain: "meal-planning-99c7b.firebaseapp.com",
  databaseURL: "https://meal-planning-99c7b.firebaseio.com",
  projectId: "meal-planning-99c7b",
  storageBucket: "meal-planning-99c7b.appspot.com",
  messagingSenderId: "868043141587",
  appId: "1:868043141587:web:2bc9ad6f5748f38ada3f26",
  measurementId: "G-B04H5PR4TQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;