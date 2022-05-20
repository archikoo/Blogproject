import React from 'react'
import {auth,provider} from "../friebase-config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export default function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/")
    });
  };
  return (
    <div className='loginPage'>
       <img
              src="https://pngimg.com/uploads/google/google_PNG19640.png"
              alt=""
            />
      <p>Sing In With Google to Continue</p>
      <button className='login-with-goole-btn' onClick={signInWithGoogle}>Sing in with Google</button>
      </div>
  );
}
