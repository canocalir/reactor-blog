import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9hVbbrCNm1sbRavqReq_nvKm6fI_fm10",
  authDomain: "blog-milestone-8966d.firebaseapp.com",
  projectId: "blog-milestone-8966d",
  storageBucket: "blog-milestone-8966d.appspot.com",
  messagingSenderId: "922065969911",
  appId: "1:922065969911:web:4b15493caac31fab6829f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
