export const checkvaliddata = (email, password) =>{

 const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
 const isPassValid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password);
 
 if(!isEmailValid) return "Email is not valid";
 if(!isPassValid) return "Password is not valid";
 
 
 return null;



};