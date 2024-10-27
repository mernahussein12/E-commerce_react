import React,{useState} from 'react'
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
// import { bg } from '../assets'
const Countact = ()=> {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();

    axios.post ('/contact', {name,email,subject,message})
    .then(response =>{
      console.log(response.data);
      alert('تم ارسال رسالتك ')
    })
    .catch(error =>{
      console.log(error);
      alert('حاول مره اخري')
    });
  };



  return (
    <div>
      {/* <div>
     <img  className='w-screen h-ful bject-cover'
     src={bg} alt="bg" />
     </div> */}
<div className="h-screen w-full grid place-items-center bg-slate-100">
<div className="bg-white rounded-md shadow-md flex flex-row">
  {/* contact information */}
  <div className="h-96 w-96 bg-blue-800 p-8 md:hover:scale-y-110 rounded-md transition md:block">
   <div className="flex justify-between ">
    <h2 className="text-white text-xl font-semibold">Contact Information</h2>
     </div>
     <div className="mt-6 flex flex-row">
      <div className='mr-2 text-white'>
      <PersonIcon/>
      </div>
      <div>
       <h2 className="text-slate-200 text-xs font-semibold">Name : </h2>
       <p className="text-white text-xs  font-medium "> Merna Hussein</p>
      </div>
      </div>
     

    
     <div className="mt-6 flex flex-row">
      <div className='mr-2 text-white'>
      <EmailIcon/>
      </div>
      <div>
       <h2 className="text-slate-200 text-xs font-semibold">Email : </h2>
       <p className="text-white text-xs  font-medium "> Mernahussein@gamil.com</p>
      </div></div>
 
     
      <div className="mt-6 flex flex-row">
      <div className='mr-2 text-white'>
      <PhoneIcon/>
      </div>
      <div>
       <h2 className="text-slate-200 text-xs font-semibold">Phone : </h2>
       <p className="text-white text-xs font-medium  "> 01048259100</p>
      </div></div>

      <div className="mt-6 flex flex-row">
      <div className='mr-2 text-white'>
      <HomeIcon/>
      </div>
      <div>
       <h2 className="text-slate-200 text-xs font-semibold">Address : </h2>
       <p className="text-white text-xs font-medium  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Obcaecati, repellendus. </p>
      </div></div>


  </div>
  {/* contact us from */}
  <form onSubmit={handleSubmit}>
<div className="h-96 w-96 " >
<div className="flex justify-between ">
    <h2 className="text-blue-700 ml-28  font-semibold mt-3">Get In Touch</h2>
     </div>
     <div className="bottom-6 mt-5">
      <input type="text" name='name' placeholder="Enter Your Name"  value={name} onChange={e=>setName(e.target.value)} required
      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" />
       <input type="email" name='email' placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} required
      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" />
       <input type="text" name='subject' placeholder="Subject" value={subject} onChange={e=>setSubject(e.target.value)} required
      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm" />
       <textarea type="text" name='message' placeholder="Enter Your Message here"  value={message} onChange={e=>setMessage(e.target.value)} required
      className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none" ></textarea>
      <input type="submit" value="Send" 
       className="bg-blue-700 px-4 py-2 rounded-md text-xs text-white cursor-pointer hover:shadow-md ml-6"/>
       </div>
</div>
</form>
</div>
</div>

    </div>
  )
}

export default Countact