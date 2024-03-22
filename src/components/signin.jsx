import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../middleware/Auth';


const provider = new GoogleAuthProvider();
provider.addScope("https://mail.google.com/");

const signin = () => {

    const authenicate = () => {
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
    
    return <>
        <div className="flex bg-black h-screen">
            <div className="w-full md:w-2/5 bg-black flex justify-center items-center h-screen max-sm:hidden max-md:hidden">
                <h1 className="text-4xl font-bold mb-4 text-white">Email Sender</h1>
            </div>
            <div className="w-full h-screen md:w-3/5 bg-gray-900 flex justify-center items-center">
            <div className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
                <button onClick = { () => authenicate() }>
                    sign in with google
                </button>
                </div>
            </div>
        </div>
    </>
}

export default signin;