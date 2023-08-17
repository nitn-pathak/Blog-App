import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//   import  { baseUrl } from "../BaseUrl";
 

//step 1 
export const AppContext = createContext();

let baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export function AppContextProvider({ children }) { 
    

    const [loding, setLoading] = useState(false);

    const [posts , setPosts] = useState([]);

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(null);
    
     const navigate = useNavigate();

    //data-filling pending


   async  function fetchBlogPost(page=1,tag=null,category){
        
        setLoading(true);

        // let url = `ht tps://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;

     //   let url = `${baseUrl}?page=${page}`;
       
        
     //    let url = `${baseUrl}?page=${page}`;
        
        let baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs?";

        

       let url = `${baseUrl}page=${page}`;
        
       if(tag) {  
           
            url += `&tag=${tag}`;

            
       }
       
       if(category) { 
           
            url += `&${category}`;

          //   console.log(url)
         }
         
        // let url = 'https://codehelp-apis.vercel.app/api/get-blogs?page=2';
        
        try {

            const result = await fetch(url);

            const data = await result.json();

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
             
             console.log(data);
             console.log(url)


        } catch (error) {
            
            // alert(" error in fetching data");
             setPage(1);
            setPosts([]);
            setTotalPages(null);

            
         }

       
        setLoading(false);
   }
    
    function handlePageChange(page) { 
         navigate({search: `?page=${page}`})
                  setPage(page);
          
    }
    
    const value = { 
        posts,setPosts,
         loding,setLoading,
        page,setPage,
        totalPages, setTotalPages ,
        fetchBlogPost,
         handlePageChange         
    } 
    
    //step 2
    return <AppContext.Provider value={value}>
           {children} 
          </AppContext.Provider>

}

