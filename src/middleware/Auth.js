import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkSDan4yTRNDxiQJe5-VFhwqz-iiO5vI8",
  authDomain: "authapplication-1edfc.firebaseapp.com",
  projectId: "authapplication-1edfc",
  storageBucket: "authapplication-1edfc.appspot.com",
  messagingSenderId: "143450948923",
  appId: "1:143450948923:web:c1ce99298db551c6c2a31e",
  measurementId: "G-4S9T4TMR2E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

