import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../middleware/Auth';
import GoogleIcon from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const provider = new GoogleAuthProvider();
provider.addScope("https://mail.google.com/");

const signin = () => {
    const navigator = useNavigate();
    localStorage.removeItem("_userkey");
    localStorage.removeItem("_userMail");

    const authenicate = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          
          const user = result.user;
          verifyUser(user.email, user.displayName, token)
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
    
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
     }
     
    const verifyUser = (oAuthEmail, oAuthName, token) => {
        axios.post('http://127.0.0.1:8787/api/v1/auth/config', {
            email: oAuthEmail,
            name: oAuthName
        }).then(res => { 
            if(res.data.userid)
            {       
                localStorage.setItem('_userkey', token);
                localStorage.setItem('_userMail', oAuthEmail);
                navigator('/'+res.data.userid);
            }
            else{
                navigator('/');
            }
        })
        .catch(error => {
            console.log(error);
            alert("error while sigin in")
        })
    } 
    return <>
        <div className="flex bg-black h-screen">
            <div className="w-full md:w-2/5 p-10 bg-gradient-to-r from-[#ebfb9b] via-[#a2f9e9] to-[#e3fbf3] ... flex flex-col justify-center h-screen max-sm:hidden max-md:hidden">
                <h1 className="text-4xl font-bold mb-4 text-[#0C2657]">Email Sender</h1>
                <p className="text-[#0C2657] font-euclid">Effortlessly send personalized emails to multiple recipients. 
                With just a single click, reach out to each recipient individually, 
                ensuring a tailored and professional touch in every message.</p>
            </div>
            <div className="w-full h-screen md:w-3/5 bg-white flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-green-700 font-serif text-3xl p-8">Log in to your account</h2>
                </div>
                <div style={ {backgroundColor: '#F9FBFA'}} className="py-10 px-9 border shadow sm:rounded-lg sm:px-14 text-center hover:shadow-md" >
                    <h5 className="py-3 text-2xl">Welcome</h5>
                    <h5 className="py-3">continue with</h5>
                    <button className="w-full hover:shadow-md flex justify-center items-center gap-2 py-3 px-4 border border-black rounded font-light text-md text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 " onClick = { () => authenicate() }>
                        <img src={GoogleIcon} className="w-5 h-5 mr-2" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default signin;