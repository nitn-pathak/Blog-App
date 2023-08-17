import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blog from '../components/Blog'

const Home = () => {
  return (

    <div>
       
      <Header />
      <div>
        
        <Blog/>
        <Pagination />
        
      </div>



    </div>
  )
}

export default Home
