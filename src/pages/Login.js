
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux'

import { addUser } from '../redux/ShoopingSlice'
import { useNavigate } from "react-router-dom";
import logofacebook from "../assets/logo facebook.jpg"
import logogoogle from "../assets/logo google.jpg"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
} from "firebase/auth"

const Login = () => {

  const dispatch = useDispatch()
const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

const handleGoogeleLogin=(e)=>{
e.preventDefault();

signInWithPopup(auth, provider)
  .then((result) => {
  
    const user = result.user;
    // console.log(user)
    dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
    }))
    setTimeout(()=>{
      navigate("/")
    },1500)
    
  }).catch((error) => {
   
    // console.log(error)
  });



};


 async function handleSubmit(e){

   e.preventDefault();
   navigate("/");
 
  }
  return (
   
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
  Log in to your account
  </h2>
 </div>
 <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
 <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}  >
 <div>
 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email address
      </label>
      <div className="mt-1">
        <input id="email" name="email" type="email" autoComplete="email" 
        required 
       
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
 </div>
 <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <div className="mt-1">
        <input id="password" name="password" type="password" autoComplete="current-password" 
        required 
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
      </div>
      </div>
      <div>
      <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input id="remember_me" name="remember_me" type="checkbox" 
        className="h-4 w-4
         text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 ">
          Remember me
        </label>
      </div>
      
      <div className="text-sm">
        {/* هعمل هنا صفحة توديني اغير الباسورد */}
      
      </div>
     </div>
     <div>
     <button type="submit" className="group relative w-full flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
      hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6">
      Sign in
      </button> </div>
      <div className="justify-between bottom-6 pt-5">
     <Link  className="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password? 
     </Link>
        <Link to="/Register"
        className="font-medium text-indigo-600 hover:text-indigo-500 ml-14">
          Creat New Acount
         </Link>
        
        </div>
  
      </div>
      <div onClick={handleGoogeleLogin} className="flex items-center ml-40 ">
        <img className="w-8 mr-2"
        src={logofacebook} 
        alt="logogoogle" />

        <img className="w-8"
        src={logogoogle}
          alt="logogoogle" />
        </div>
 
    </form>


    </div>

    </div>
   
    </div>
  )
}

export default Login