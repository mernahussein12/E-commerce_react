
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {



const navigate = useNavigate();

 async function handleSubmeit(e){
  e.preventDefault();
  navigate('/')
}

  return (
    <div>
          <div className=" flex items-center justify-center  ">
           <div className="bg-white p-8 shadow-lg rounded-md max-w-md w-full">
           <h2 className="text-2xl font-bold mb-4 ">Login</h2>
          <form action="/" method="POST" onSubmit={handleSubmeit} >
          <div className="mb-4">
             <label htmlFor="text" className="block text-gray-700 font-semibold mb-2">First Name</label>
            <input type="text" id="Fname" name="firstName" className="border
              border-gray-400 p-2 rounded w-full" required />
               <label htmlFor="text" className="block text-gray-700 font-semibold mb-2">Last Name</label>
            <input type="text" id="Lname" name="lastName" className="border
              border-gray-400 p-2 rounded w-full" required  />
         </div> 
           <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="border
             border-gray-400 p-2 rounded w-full" required />
         </div>
          <div className="mb-6">
           <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
           <input type="password" id="password" name="password" className="border
              border-gray-400 p-2 rounded w-full" required  />
          </div>
           <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Login</button>

           <Link to="/Login"

             className="text-blue-500 hover:text-blue-600 font-semibold">Sign Up
           
           </Link>
           </div>
          </form>
       </div>
          </div>
    </div>
  )
}

export default Register