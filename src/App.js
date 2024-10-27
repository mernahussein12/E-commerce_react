
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./components/SingleProduct"
import { createBrowserRouter, createHashRouter, Outlet, RouterProvider
,ScrollRestoration } from "react-router-dom";
import {prouductsData} from "./api/Api";
import Location from "./pages/Location";

import Register from "./pages/Register";
import Login from "./pages/Login"
import Countact from "./pages/Countact";

const Layout=()=>{
  return(
    <div className="font-bodyFont">
      <Header/>
      <Outlet />
      <ScrollRestoration />
      <Footer/>
    </div>
  );
};
const router = createHashRouter([
  {
    path:"/",
   element:<Layout />,
   children:[
    {
      path:"/",
      element:<Home/>,
      loader:prouductsData,
    },
    {
      path:"/SingleProduct/:id",
      element:<SingleProduct />,
    },
    {
      path:"/cart",
      element:<Cart />,

    },
    {
     path:"/Register",
     element:<Register/>
    },
    {
      path:"/Login",
      element:< Login/>
    },
    {
      path:"/Countact",
      element:< Countact/>
    },
    {
      path:"/Location",
      element:< Location/>
    },
   
   ],
  
  },
]) 

function App() {
  return (
    <>
      <div className="font bodyFont">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
