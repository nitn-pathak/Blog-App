import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import left from '../assets/left.png'

const Categorypage = () => {

     const navigation = useNavigate();

  const location = useLocation();

  const category = location.pathname.split("/").at(-1).replaceAll("%20"," ");

  let cat = category.split("=").at(-1);

  return (
     
     <div>    
      <Header/>

      
      <div className=' text-white  '>
        
       <button className='bg-black px-7 py-4 rounded-lg mt-20 ml-2  ' onClick={() => navigation(-1)} >
        
          <div className='flex justify-center items-center '>
            <img src={left} loading='lazy' className='h-[11px]' alt="back" />  Back
            </div>
          </button>  
      
         <h1 className=' font-mono font-bold text-3xl text-center p-10' > {cat} Realated Blogs </h1> 
     
       </div> 
            
         
      <Blog/>

     </div>
  
      
  )
}

export default Categorypage
