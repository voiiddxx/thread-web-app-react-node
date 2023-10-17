import React, { useEffect } from 'react'
import logo from './logo.png'
import './Splash.css'
import meta from './meta.png'
import { useNavigate } from 'react-router'
import Home from '../home/Home'

const Splash = () => {
    const navigate = useNavigate();

    useEffect(()=>{
      const token =   localStorage.getItem("x-auth-token");
        setTimeout(() => {
           if(token!=null) {
            navigate("/Home")
           } 
           else{
            
            navigate("/Register")
           }
        }, 4000);
    } , [])
    
  return (
   <>
   {
    localStorage.getItem("x-auth-token") ? <Home/> :  <div className="splash-main">
    <img className='logo' src={logo} alt="logo" />
    <div className="splash-footer">
        <p>From</p>
        <img className='footer-logo' src={meta} alt="logo" />
    </div>
    </div>
   }
    </>
  
  )
}

export default Splash