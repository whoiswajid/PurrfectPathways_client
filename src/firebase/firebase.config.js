// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AuthDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAJr8S8jo20NDz3iRYw8i29hCTCAXetIKw",
  authDomain: "purrfect-pathways.firebaseapp.com",
  projectId: "purrfect-pathways",
  storageBucket: "purrfect-pathways.appspot.com",
  messagingSenderId: "496636021538",
  appId: "1:496636021538:web:1129db45bc66ab8956737b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;