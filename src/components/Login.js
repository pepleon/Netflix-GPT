import { useState, useRef } from "react";
import Header from "./Header";
import { checkvaliddata } from "../utils/validate";
import {createUserWithEmailAndPassword ,  signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignIn,setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(true);
 
  const dispatch = useDispatch();

  const handleButtonClick = () =>{
   console.log(email.current.value);
   console.log(password.current.value);
   const message = checkvaliddata(email.current.value, password.current.value);
    seterrorMessage(message);
  if (message) return;

 if (!isSignIn){
  
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    }).then(() => {
   
      const {uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
  
    }).catch((error) => {
      // An error occurred
      // ...
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +"-"+errorMessage);
    // ..
  });

 }
 else {
  
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     
      console.log(user);      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });


 }



  
  };

  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }


  return (
<div>
 <div><Header/></div>

<div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg"/></div>
  
<div>
  <form onSubmit = { (e)=> e.preventDefault()}className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
  <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
  {!isSignIn &&   <input ref = {name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
  <input ref = {email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
  <input ref = {password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
  <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
  <button onClick={ handleButtonClick}className="p-4 my-6 bg-red-700 w-full rounded-lg" >{isSignIn? "Sign In" : "Sign Up"}</button>
  <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
  </form>



    </div>
  
</div>)
}


export default Login;