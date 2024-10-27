import React from 'react'
import { useSelector } from 'react-redux'
import  {MdOutlineClose} from "react-icons/md"
import {HiOutlineArrowLeft} from "react-icons/hi"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'
import { decreamentQuantity, deletItem, reserCart,increamentQuantity } from '../redux/ShoopingSlice';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
// import swal from 'sweetalert';
 

const CartItem = () => {
    const dispatch = useDispatch()
      const productData = useSelector((state)=> state.ShoopingSlice.productData);
       // swall
      const handleDeleteItem = (item) => {
        Swal.fire({
            title: `Are you sure to remove ${item.title}!`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed){
                dispatch(deletItem(item.id))
                toast.error(`${item.title} is removed`)
            }
        })
      }

      

  return (
    <div className='w-2/3 pr-10'>
        <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
        </div> 
        <div>
       
            {productData.map((item)=>(
                    <div
                    key={item.id}
                    className="flex items-center justify-between gap-6 mt-6">
                        <div className='flex items-center gap-2'>
                            <MdOutlineClose onClick={() => handleDeleteItem(item)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-150' />
                            <img src={item.image} alt={item.title} className='w-32 h-32 object-cover' />
                        </div>
                        <h2 className='w-52'>{item.title}</h2>
                        <p className="w-10">${item.price}</p>
                        <p className="w-10">${item.oldPrice}</p>
                        <div className="border  p-3 flex justify-between  text-gray-500  w-52 items-center">
                       <p className="text-sm  ">Quntity</p>
                        <div className="flex items-center gap-4 text-sm font-semibold ">
                        
                            <span
                             onClick={()=>dispatch(
                                decreamentQuantity({
                                    _id:item._id,
                                    title:item.title,
                                    image:item.image,
                                    price:item.price,
                                    oldPrice:item.oldPrice,
                                    quantity:1,
                                    description:item.description,
                                })
                            )}
                            
                            className="border h-5 font-normal text-lg items-center flex justify-center px-2 hover:bg-gray-700
                            hover:text-white cursor-pointer duration-300 active:bg-black">
                                -
                            </span>
                            {item.quantity}
                            <span 
                                onClick={()=>dispatch(
                                    increamentQuantity({
                                        _id:item._id,
                                        title:item.title,
                                        image:item.image,
                                        price:item.price,
                                        oldPrice:item.oldPrice,
                                        quantity:1,
                                        description:item.description,
                                    })
                                )}
                            className="border h-5 font-normal text-lg items-center flex justify-center px-2 hover:bg-gray-700
                            hover:text-white cursor-pointer duration-300 active:bg-black">
                                +
                            </span>
                            </div>
                        </div>
                        <p className="w-14">${item.quantity * item.price}</p>
                     </div>
                ))}
            
        </div>
        <button onClick={()=>dispatch( reserCart())&toast.error("You Cart is Empty!")}
        className="bg-red-500 text-white mt-8 ml-7  py-1  px-6 hover:bg-red-800 
        duration-300">
            Reset Card
            </button>
            <Link to="/">
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                 <span>
                    <HiOutlineArrowLeft/>
                   
                 </span>
                 go shopping
                </button>
            </Link>
       <ToastContainer
       position='top-left'
       autoClose={3000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark"
       />
     </div>
    
  )
}

export default CartItem