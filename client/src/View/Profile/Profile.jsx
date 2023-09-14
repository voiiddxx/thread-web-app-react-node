import React, { useContext, useState } from 'react'
import "./Profile.css"
import Nav from '../../Components/Nav/Nav'
import { Authcontext } from '../../Contexts/Authcontext'
import { Postcontext } from '../../Contexts/Postcontext'
import Viewpost from '../../Components/post/Viewpost'
import { useNavigate } from 'react-router'
import Follow from '../Follow/Follow'
import Viewreplypost from '../Replypost/Viewreplypost'
const Profile = () => {
  console.log(localStorage.getItem("x-auth-token"));
    const {user} = useContext(Authcontext);
    const {userpost} = useContext(Postcontext);
    const navigate = useNavigate();


    const showFollow = ()=>{
      return <Follow/>
    }


const [followscreen, setfollowscreen] = useState(false);
const [Gotorepost, setGotorepost] = useState(false);


const close = ()=>{
 return setfollowscreen(false);
}




  return (
    <>
    
     <div className="profile-main-box">
        <Nav/>
     </div>

     

     <div className="profile-main-content">
        <div className="upper-profile">
            <div className="upper-left-profile">
    <h1>{user.username}</h1>
    <p>{user.email} <span>threads.net</span> </p>

    <h2 onClick={()=>{
      setfollowscreen(true)
    }} >
        {user.followers?.length} followers      {user.following?.length} following
    </h2>
            </div>
            <div className="upper-left-right">
              {
                user.profilepic!==""  ? <img onClick={()=>{
                  navigate("/Uploadprofile")
                }} className='profile-image' src={user.profilepic} alt="profilehai" /> :
                <img onClick={()=>{
                  navigate("/Uploadprofile")
                }} className='profile-image' src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="njasbd" />
              }
            </div>
        </div>


        <div className="profile-menu">
          <p onClick={()=>{
            setGotorepost(false)
          }} >Threads</p>
          <p>Replies</p>
          <p onClick={()=>{
            setGotorepost(true)
          }} >Reposts</p>
        </div>

        <div className="profile-menu-border"></div>
       <div className="profile-posts">
       {
         Gotorepost === false ? userpost.map((curr , index)=>{
             return <Viewpost key={index+1} {...curr}/>
          }) : <Viewreplypost/>
        }
       </div>


     </div>
     {
      followscreen == true ? <Follow  close={close}/> : <div></div>
    }

    </>
    
  )
}

export default Profile