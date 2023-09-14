import React from 'react'
import "./Home.css"
import Nav from '../../Components/Nav/Nav'
import Addpost from '../../Components/upaddpost/Addpost'
import Allpost from '../Allpost/Allpost'

const Home = () => {
  
  return (
    <div>
      <div className="home-main">
    <Nav/>
    <Addpost/> 
    <Allpost/>
      </div>
      
    </div>
  )
}

export default Home