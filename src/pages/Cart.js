import React, {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
// import LightSpeed from 'react-reveal/LightSpeed';

const Cart = () => {
  const productData = useSelector((state)=> state.ShoopingSlice.productData);
 const [totalAmt, setTotalAmt]= useState("");
 const userInfo = useSelector((state)=>state.ShoopingSlice.userInfo);
 const [payNow, setPayNow]= useState(false);

 const handleCheckout = ()=>{
  if(userInfo){
    setPayNow(true)
  }else{
    toast.error("please sign in to Checkout");
  }
 }

 useEffect(() => {
 let price = 0;
  productData.map((item)=>{
    price += item.price * item.quantity;
    return price;
  });
  setTotalAmt(price.toFixed(2));
 },[productData]);
  return (
    
    <div >
       {/* < LightSpeed left > */}
      <img 
      className="w-full h-60 object-cover"
      src="https://i.pinimg.com/564x/03/61/25/0361251883b22c80539ce0fbac5dd808.jpg"
       alt="cartImg" />

       <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
           <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
           <h2 className="text-2xl font-medium">cart totals</h2>
           <p className='flex items-center gap-4 text-base'>
            Subtotal{" "}
             <span className="font-titleFont font-bold text-lg">
              $ {totalAmt}
             </span>
           </p>
           <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur
               adipisicing elit
               Recusandae, consectetur!
            </span>
           </p>
           </div>
           <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">
              $ {totalAmt}
            </span>
           </p>
           <button onClick={handleCheckout} className="text-base bg-black text-white w-full mt-6 py-3 hover:bg-gray-800 duration-500">
            proceed to checkout
           </button>
           {payNow && (
            <div className="'w-full mt-6 flex items-center justify-center">
              <StripeCheckout
              stripeKey="pk_test_51Mts8xDL9gl4xwnh4C9kzQa7gAPlsBymYNkZCsFnAsKsPwKLTeoEKKueYXseObkCvWtTd44V4AXJUyUkWZB2xPEb00zv8KBxJE"
              name="Online Shooping"
              amount={totalAmt * 100}
              label="pay to shooping"
              description={`Your Payment amount is $${totalAmt}`}
              email={userInfo.email}
            
              />
            </div>
           )

           }
        </div>
       </div>

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
       {/* </LightSpeed> */}
    </div>
  
  );
};

export default Cart