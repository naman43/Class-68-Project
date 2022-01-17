import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = 
{
  apiKey: "AIzaSyByjqPxCvFw94SF24QvDMVx2_9XTc-EwXs",
  authDomain: "team-voting-a88b1.firebaseapp.com",
  databaseURL: "https://team-voting-a88b1-default-rtdb.firebaseio.com",
  projectId: "team-voting-a88b1",
  storageBucket: "team-voting-a88b1.appspot.com",
  messagingSenderId: "733473525859",
  appId: "1:733473525859:web:e9faf57d0cad3071bce856",
  measurementId: "G-VD8WXK6MVS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);