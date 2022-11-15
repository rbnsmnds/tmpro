// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtewrDHHk2XbIrUP6sbs1qVXutkKl2ydA",
  authDomain: "telemedicina-projeto.firebaseapp.com",
  projectId: "telemedicina-projeto",
  storageBucket: "telemedicina-projeto.appspot.com",
  messagingSenderId: "919042204891",
  appId: "1:919042204891:web:ff66959adab21daf5b18fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
