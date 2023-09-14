import React, { useState } from 'react'
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse , faMagnifyingGlass , faPenToSquare , faHeart , faUser, faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Postmodal from '../Postmodal/Postmodal'
import { useNavigate } from 'react-router'

const Nav = () => {

  const [ShowPostModal, setShowPostModal] = useState(false);

  const CloseModal = ()=>{
    return setShowPostModal(false)
  }
  const navigate = useNavigate();

  
    
    
  return (
    <>
    <div className="nav-main">
        <div className="left">
            <img src="https://staticg.sportskeeda.com/editor/2023/07/9a80c-16886367720159-1920.jpg" alt="thread logo" />
        </div>
        <div className="mid">
        <FontAwesomeIcon onClick={()=>{
          navigate("/Home")
        }} icon={faHouse} size="xl" style={{color: "#ffffff",}}  />
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{color: "#787878",}} />
        <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#787878",}} onClick={()=>{
          setShowPostModal(true);
        }} />
        <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#787878",}} />
        <FontAwesomeIcon onClick={()=>{
          navigate("/Profile")
        }} icon={faUser} size="xl" style={{color: "#787878",}} />
        
        </div>
        <div className="right">
            
        <FontAwesomeIcon onClick={()=>{
          localStorage.removeItem("x-auth-token");
          navigate("/Register")
        }} icon={faArrowRightFromBracket} size="xl" style={{color: "#787878",}} />
        </div>
    </div>

    {
      ShowPostModal && <Postmodal closemodal = {CloseModal}/> 
    }
    </>
  )
}

export default Nav