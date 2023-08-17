import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import left from '../assets/left.png'
import right from '../assets/right.png'

const Pagination = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext);
  


  // useEffect(() => {   
  //           handlePageChange()
  //      },[]);
   

  return (
    
      <div className='bg-red-300   relative z-0  top-12 '>
      
        <div className=' flex flex-row   items-center justify-center p-3 fixed bottom-0 bg-b w-[100vw]  bg-slate-800 '>

        
        <div className='flex flex-row gap-3 ' >


           { 
          page > 1 &&
          
          (<button className=' bg-black p-3  rounded-md text-white  flex flex-row items-center h-10 '  onClick={function(){handlePageChange(page-1) }} >
              <img src={left} className='h-[11px]' alt="back" />
                 Previous
          </button>)
        }
     
        
        { 
          page < totalPages &&
          
          (<button className='bg-black p-3  rounded-md text-white  flex flex-row items-center h-10' onClick={() => {handlePageChange(page+1)}} >
              
              Next
              <img src={right} className='h-[11px]' alt="back" />
          </button> )
          }
          
            <div className='flex justify-center items-center text-white text-lg'>
           <p> {page}  of {totalPages}  </p> 
            </div>

        </div>
       
        
        
        
        </div>
       
          
      </div>
  )
}

export default Pagination
