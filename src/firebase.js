import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyArQqVNeuX6aOLFYQSkyhAZFe5nJkc_UHA",
    authDomain: "veocam-staging.firebaseapp.com",
    databaseURL: "https://veocam-staging.firebaseio.com",
    projectId: "veocam-staging",
    storageBucket: "veocam-staging.appspot.com",
    messagingSenderId: "380417336680",
    appId: "1:380417336680:web:a8b748f9249a77547362dd",
    measurementId: "G-T81FSDKCES"
};
  
export const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();