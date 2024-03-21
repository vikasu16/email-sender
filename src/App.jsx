import { useState } from 'react'
import './App.css'
import {auth} from './middleware/Auth'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope("https://mail.google.com/");

function App() {
  const [count, setCount] = useState(0)

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      console.log(token);
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    });
 }

  return (
    <>
      <div>
        <button onClick = { () => signIn() }>
          sign in with google
        </button>
      </div>
    </>
  )
}

export default App
