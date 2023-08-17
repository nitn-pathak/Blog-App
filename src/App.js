import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination'; 
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Routes,Route, useSearchParams, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';

function App() {
 
  const {fetchBlogPost} = useContext(AppContext);
  
  const [searchParams,setsearchParams] = useSearchParams();

  const location = useLocation();

       useEffect(() => { 
          //fetchBlogPost()

    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {

      // const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
    
       const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
    

      fetchBlogPost(Number(page),tag);
      
      
    } else if (location.pathname.includes("categories")) {
     
      const category = location.pathname.split("/").at(-1).replaceAll("-","");
    
      fetchBlogPost(Number(page), null, category)

    } else { 

      fetchBlogPost(Number(page));

    }
     
       },[location.pathname, location.search]);
  
  
  return (
    <div className="App bg-orange-300">
        
      {/* <Home>

      </Home>
      */}

      <Routes> 
        
         <Route path="/" element={<Home/>} />
         <Route path="/blog/:blogId" element={<BlogPage/>} />
         <Route path="tags/:tag" element={<TagPage/>} />  
         <Route path="/categories/:category" element={<CategoryPage/>} />  

        
       </Routes>

          
     
    </div>
  );
}

export default App;
