import React from 'react'
import {  logo,pay,play } from '../assets';
import {ImGithub} from "react-icons/im"
import {FaFacebookF,FaTwitter,  FaInstagram,FaYoutube,FaHome} from 'react-icons/fa';
import { MdLocationOn} from "react-icons/md";
import {BsPersonFill,BsPaypal,BsMagic} from "react-icons/bs";

const Footer = () => {
  return (

              <div className="bg-black text-[#949494] py-20 font-titleFont">

               <div className="max-w-screen-xl mx-auto grid grid-cols-4">

                                {/* loginIcons start here */}
                    <div className="flex flex-col gap-6">
                      <img className="w-24" src={logo} alt="logo" />
                      <p className='text-white text-sm tracking-wide'> @ReactBD.com </p>
                      <div className='flex gap-3'>
                        <img className='w-8 '    src={pay}    alt="pay" />
                        <img className='w-8 h-7' src={play}   alt="play" />
                        <img className='w-8 '    src={pay}    alt="pay" />
                        <img className='w-8 h-7' src={play}   alt="play" />
                      </div>
                
                      <div         className="flex gap-5 text-lg text-gray-400">
                        <ImGithub    className="hover:text-white duration-200 cursor-pointer"/>
                        <FaTwitter   className="hover:text-white duration-200 cursor-pointer"/>
                        <FaFacebookF className="hover:text-white duration-200 cursor-pointer"/>
                        <FaInstagram className="hover:text-white duration-200 cursor-pointer"/>
                        <FaYoutube   className="hover:text-white duration-200 cursor-pointer"/>
                        <FaHome      className="hover:text-white duration-200 cursor-pointer"/>
                      </div>
                    </div>
                              {/* loginIcons end here */}

                               {/* locatUs start here */}
               
              <div className="text-base flex flex-col gap-6 ">
                <h2 className="text-2xl font-semibold text-white mb-4 " >Locate Us</h2>
                <ul className='flex flex-col gap-6 text-base'>
                  <li>Country : Egypt-El-Dakahlia-El-Mansoura</li>
                  <li>e-mail  : shopping@gamil.com</li>
                  <li>Mobile : 01020301512</li>
                  <li> Phone : 999 24762891</li>
                </ul>
              </div>
                                   {/* locatUs end here */}

                                   {/* profile start here */}
               <div>
               <div className="flex flex-col gap-6 text-base ml-[55px]">
               <h2 className="text-2xl font-semibold text-white mb-4 " >Profile</h2>
               <p  className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'> 
                <span className="text-lg">
                <BsPersonFill />
                </span>my account
                </p>

                <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'> 
                <span className="text-lg">
                <BsPaypal />
                </span>checkout
                </p>

                <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'> 
                <span className="text-lg">
                <MdLocationOn />
                </span> Location
                </p>

                <p className='flex items-center gap-3 hover:text-white duration-200 cursor-pointer'> 
                <span className="text-lg">
                <BsMagic/>
                </span> helpe?
                </p>
                </div>
                </div>
                                       {/* profile end here */}

                                      {/* Subscrip start here */}

                    <div className="flex flex-col justify-center mr-[15px]">
                    <input className="bg-transparent border px-4 py-3 text-sm"
                     placeholder="e-mail"
                     type="text" />
                    <button className="text-sm border text-white border-t-0 hover:bg-gray-900
                    active:bg-white active:text-black py-2"> Subscribe</button>
                    </div>

                                          {/* Subscrip end here */}

              
            </div>  
            </div>
        
       
  )
}

export default Footer