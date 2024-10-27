import axios from "axios";

export const REGISTER = "register";
export async function prouductsData(){

    
    const products = await axios.get(
    
    // " https://api.escuelajs.co/api/v1/products"
    
      // "https://api.escuelajs.co/api/v1/products" 

     "https://fakestoreapiserver.reactbd.com/products" 
   
  

    
    );
    return products;
}