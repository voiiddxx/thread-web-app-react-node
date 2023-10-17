import React from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Splash from './View/start/Splash'
import Register from './View/Auth/Register'
import Uploadprofile from './View/Auth/Uploadprofile'
import Home from './View/home/Home'
import Login from './View/Auth/Login'
import Comment from './View/Comment/Comment'
import Profile from './View/Profile/Profile'
import Otherprofile from "./View/Profile/Otherprofile.jsx"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const App = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <Router>
      <Routes>
        <Route path='/' element={<Splash/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Uploadprofile' element={<Uploadprofile/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Comment' element={<Comment/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Otherprofile' element={<Otherprofile/>} />
      </Routes>
    </Router>
    </SkeletonTheme>
  )
}

export default App