
import React from 'react'
import { BsCart } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {logo} from '../assets/index'


const Header = () => {
  
  const productData = useSelector((state)=> state.ShoopingSlice.productData);  
  const userInfo = useSelector((state)=>state.ShoopingSlice.userInfo);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
         <Link to="/">
         <div>
                <img src={logo} alt='logo' className='w-20 ' />
            </div>
         </Link>
        <div className='flex items-center gap-8'>
         <ul className='flex items-center gap-8'>
        <Link to="/"  > <li className='text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] 
                         cursor-pointer duration-300 font-titleFont'>Home</li>
        
        </Link>
        <Link >
         <li className='text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] 
                         cursor-pointer duration-300 font-titleFont'>Pages</li>
                         </Link>
         <li className='text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] 
                         cursor-pointer duration-300 font-titleFont'>Shop</li>
                         <Link to="/Countact">
         <li className='text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] 
                         cursor-pointer duration-300 font-titleFont'>Countact</li>
                         </Link>
                         <Link to="/Location">
         <li className='text-base text-black font-bold hover:text-orange-900
                        hover:underline underline-offset-2 decoration-[1px] 
                         cursor-pointer duration-300 font-titleFont'>Location</li>
                         </Link>
         </ul>
      <Link to="/Cart" className="relative">
      {/* className='relative w-20' */}
           <i className="text-3xl text-gray-800 cursor-pointer hocus:text-4xl">                                  
            <BsCart /></i>
            <span className="absolute top-0 right-1 
            h-4 w-4 bg-red-500 rounded-full flex items-center 
            justify-center font-semibold text-white text-xs" >{productData.length}</span>
      </Link>
      <Link to="/Login">
      <img 
      className="w-8 h-8 rounded-full"
      
      src={userInfo?userInfo.image
      
      
    :   "https://i.pinimg.com/564x/c6/f5/ef/c6f5ef6672f2ac8d5ce62198c21d19e5.jpg" 
      }
      alt="userLogo" />
      </Link>
    {userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>}
        
      
        </div>
      
    </div>
    </div>
  )
}

export default Header