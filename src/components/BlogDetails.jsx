import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom'

const BlogDetails = ({ post }) => {
  

  let a;
  
  let data = [];
  for (a = 0; a <= 3; a++) {
    data.push(`${post.tags[a]}`)
    //  console.log(data)  
  }

  const [profile, setProfile] = useState([]);


  
  async function BlogProfile() {
   
    try {


   let img = await fetch("https://source.unsplash.com/random/100x100?person,portrait");

     setProfile(img.url);

     }

    catch(error) { 

      console.log(error);

    }

     
       }
  
  useEffect(() => { 
  BlogProfile();
  },[])
  

  return (
    

    <div>
      <div className='flex bg-orange-300 overflow-x-hidden   ' >
      
        <div className=' bg-stone-500 rounded-lg   box-border  overflow-x-hidden overflow-hidden my-20  mx-16  '>

        
        
          <div className='flex gap-3 flex-wrap justify-center  mx-10 my-10 ' >
        
          
            <div>
        
              {/*
        <NavLink to={`blog/blogid=${post.id}`} > */}
              {/*               
              <img src={profile} alt="profilepicture" />   */}

              <div className='flex justify-start ' >
                <img className='rounded-full ' src={profile} height={50} alt="" />
              </div>

                <span className='text-2xl font-bold' > {post.title}  </span>
              
              {/* </NavLink> 
      */}
              <p>
                By
                <span> {post.author} </span>
                on {" "}
 
                <NavLink to={`/categories/category=${post.category}`} >

                  <span className='underline text-white' > {post.category} </span>
          
                </NavLink>
        
              </p>
      
              <p> Posted on {post.date}  </p>
              
              <p className='text-lg' > {post.content} </p>
            </div>
      
          
          
            {post.tags.map((tag, index) => (

           
              <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")
                }`} >
           
                <div  >
                  <div className="bg-slate-700 h-12 w-52 rounded-xl flex items-center  justify-center " >
                    <h1 className='text-white underline text-sm  ' > {`#${tag}`} </h1>
                  </div>
                </div>
              </NavLink>

            ))}
            



            

          </div>
        </div>
          
       
      </div>
    </div>
      
    
    //        <div> 
    // {post.tags.map((tag, index) => (
          
    //     <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")
    //                 }`} >

    //       <h1 className='mt-20 text-black' > { console.log(tag) } </h1>
            
    //     </NavLink>

    //   ))}
   
    //       </div>

    
  )
}
                  

export default BlogDetails