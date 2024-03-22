import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../middleware/Auth';
import GoogleIcon from "../assets/google.svg";

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
            <div className="w-full h-screen md:w-3/5 bg-gray-900 flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-white font-bold text-2xl p-8">Log In</h2>
                </div>
                <div className="bg-white py-12 px-10 shadow sm:rounded-lg sm:px-10 text-center">
                    <h5 className="py-3 text-2xl">Welcome</h5>
                    <button className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-black rounded font-light text-md text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 " onClick = { () => authenicate() }>
                        <img src={GoogleIcon} className="w-5 h-5 mr-2" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default signin;