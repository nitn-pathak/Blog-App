import React from 'react'
import blogger from '../assets/blogger.png';


const Header = () => {
  return (
   
    <div className='relative  '>

      <div className='flex flex-row justify-center items-center   text-white  p-8  h-[50px] bg-slate-800  fixed  top-0 w-[100vw] ' > 
           
        <img src={blogger}className='h-[50px]'  alt="" />
        <h1 className='font-bold text-2xl font-mono mt-5' > logger </h1>   
        
      </div>

      </div>
  )
}

export default Header
