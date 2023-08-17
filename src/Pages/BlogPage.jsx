import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog';
import { useLocation, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';

import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';


const BlogPost = () => {


 let baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs" 

  // const [blog, setBlog] = useState(null);
  // const [relatedblogs, setRelatedBlogs] = useState([]);
 
   
  const location = useLocation();

  // console.log(location.pathname.split("/").at(-1));

   let key = location.pathname.split("/").at(-1);

   console.log(key);
   
  // const { loading,setLoading }  = useContext(AppContext)
  //  const blogId = location.pathname.split("/").at(-1);


  // async function fetchRelatedBlogs () { 

  //   // setLoading(true);

  //   let url = `${baseUrl}?blogId=${blogId}`;
    
    
  //   try {

  //     const result = await fetch(url);
  //     const data = await result.json();
  //     console.log(data);
     
  //     setBlog(data.blog);
  //     setRelatedBlogs(data.relatedblogs);

  //     console.log(url);

  //   } catch (error) { 
      
  //     setBlog(null);
  //     setRelatedBlogs([]);
  //      <div>  <h2> Result not Available</h2> </div>

  //   }
  //   // setLoading(false);

  //        }


  // useEffect(() => { 

  //   if(blogId) {
      
  //   fetchRelatedBlogs();

  //    }
    
  // },[location.pathname])
  

  return (

    // <div>

    //   <Header/>
      
    //   <div>
        
    //     <button onClick={() => navigation(-1)} > Back </button>

        
        
         

    //    </div>

    //   {

    //     loading ? (<Spinner/>)
    //       :
    //       blog ?
    //         (<div>
    //           <BlogDetails post={blog} />
    //           <h2> Related Blogs  </h2>
              
    //           {
    //             relatedblogs.map((post) => (
    //               <div key={post.id } >
    //                 <BlogDetails post={blog} />
    //              </div>

    //             ))
    //           }
    //          </div>)
            
    //         : (<p> No blog Found </p>)
      
      
    //   }
      
    // </div>
 
    <div>
      Blog Page
     </div>
  )
}

export default BlogPost
