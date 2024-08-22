import { useState } from "react";
import Header from "./Header";

const Login = () => {
   
  const [isSignIn,setIsSignIn] = useState(true);

  const toggleSignIn = () =>{
    setIsSignIn(!isSignIn);
  }


  return (
<div>
 <div><Header/></div>

<div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_large.jpg"/></div>
  
<div>
  <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
  <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
  {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
  <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
  <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
  <button className="p-4 my-6 bg-red-700 w-full rounded-lg" >{isSignIn? "Sign In" : "Sign Up"}</button>
  <p className="py-4 cursor-pointer" onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
  </form>



    </div>
  
</div>)
}


export default Login;