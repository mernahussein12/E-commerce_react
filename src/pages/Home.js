import React,{useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import Baner from '../components/Baner'
import Products from '../components/Products'

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData()
  useEffect(() => {
  setProducts(data.data);
 
 }, [data]);
  return (
    <div>
      <Baner />
      <Products  products={products}/>
    </div>
  )
}

export default Home