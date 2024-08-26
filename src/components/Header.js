import {signOut}from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (user)=> {
 if (user){  
 const {uid, email, displayName, photoURL } =user;
 dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
 
 navigate("/browse");
 }
else {
  navigate("/");
 dispatch(removeUser()); 

} 


});
    return () => unsubscribe();
  }, []);


 const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });


  }

  return (
  <div className="absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between max-w-full">
  <div > 
        <img className="w-44 absolute"
        
        src={LOGO}/>


    </div>
' { user &&(
 <div className="flex p-2">
  <img  className="w-12 h-12" src={user?.photoURL}></img>
  <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
 </div>)
}
  </div>
  )
}

export default Header;