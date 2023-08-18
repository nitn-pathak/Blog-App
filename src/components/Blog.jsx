import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';
import BlogDetails from './BlogDetails';
import error from '../assets/error.png';

const Blog = () => {


   const {posts,loading} = useContext(AppContext);


  return (

    <div  >

      {
      
                
        loading ? ( < Spinner/>) : (posts.length === 0 ? (<div className='flex flex-col h-[100vh] bg-slate-400 justify-center items-center' >   <img className='h-[100px]' src={error} alt="" /> <p> Post Not Avaiable </p> </div>) :
          
          
          (posts.map((post) => (
            
         
            <BlogDetails key={post.id} post={post} />
            
          
          )))
          
        
        
        )
        
      }      
      
    </div>
  )
}

export default Blog
