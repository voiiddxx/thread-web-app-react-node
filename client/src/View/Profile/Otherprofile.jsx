import React, { useContext, useState } from 'react'
import "./Profile.css"
import Nav from '../../Components/Nav/Nav'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'
import Viewpost from '../../Components/post/Viewpost'
import "./Otherprofile.css"
import { useFollow } from '../../Hooks/useFollow'
import { Authcontext } from '../../Contexts/Authcontext'
import Follow from '../Follow/Follow'
import Otherfollow from '../Follow/Otherfollow'
const Profile = () => {
  const {user} = useContext(Authcontext);

  const {Following} = useFollow();
    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setuserData] = useState("");
    const [ButtonText, setButtonText] = useState("Follow");

    const getUserspecific = async()=>{
      const response = await axios.get("http://localhost:5000/get-specifilc-user?username="+location.state.username , {
        headers:{
          "x-auth-token":localStorage.getItem("x-auth-token")
        }
      });
      setuserData(response.data);
    }

    const [useerDatapost, setuseerDatapost] = useState("");

    const getUserspecificpost =async ()=>{
      try{
        const response = await axios.get("http://localhost:5000/get-user-specific-post?username="+location.state.username , {
          headers:{
            "x-auth-token":localStorage.getItem("x-auth-token")
          }
        });
        setuseerDatapost(response.data);
      } catch(e){
        console.log(e);
      }
    }


    const followUser= async()=>{
      await Following(location.state.username);
      alert("followed");
      setButtonText("Following");
    }

    const [isFollow, setisFollow] = useState(false);

    const checkFollow = async ()=>{
      
      for(let i =0;i<userData.followers?.length;i++){
       if(userData.followers[i].username ===user.username){
        console.log("found");
        setisFollow(true);
       }
      }
    }


    const [showanotherfollowscreen, setshowanotherfollowscreen] = useState(false);
    

    const closefollow = ()=>{
      setshowanotherfollowscreen(false);
    }


    useState(()=>{
      getUserspecific();
      getUserspecificpost();
      checkFollow();
      
    } , []);

    const handle = ()=>{
      console.log(useerDatapost);
    }

    const getData = ()=>{
      return userData;
    }
    

  return (
    <>
     <div className="profile-main-box">
        <Nav/>
     </div>

     <div className="profile-main-content">
        <div className="upper-profile">
            <div className="upper-left-profile">
    <h1 onClick={handle} >{userData.username}</h1>
    <p>{userData.email} <span>threads.net</span> </p>

    <h2 onClick={()=>{
      setshowanotherfollowscreen(true);
    }} >
        {userData.followers?.length} followers {userData.following?.length} following
    </h2>
            </div>
            <div className="upper-left-right">
              {
                userData.profilepic!==""  ? <img onClick={()=>{
                  navigate("/Uploadprofile")
                }} className='profile-image' src={userData.profilepic} alt="profilehai" /> :
                <img onClick={()=>{
                  navigate("/Uploadprofile")
                }} className='profile-image' src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="njasbd" />
              }
            </div>
        </div>

        <div onClick={followUser} className="follower-button">
          <p>{ButtonText}</p>
        </div>


        <div className="profile-menu">
          <p>Threads</p>
          <p>Replies</p>
          <p>Reposts</p>
        </div>

        <div className="profile-menu-border"></div>
       <div className="profile-posts">
       {
        useerDatapost.length >0 ? 
        useerDatapost.map((curr , index)=>{
          return <Viewpost key={index} {...curr}  />
        })
         : <h1>No data</h1>  
        }
       </div>


     </div>
     {
      showanotherfollowscreen === true ? <Otherfollow closefollow={closefollow} getData={userData} /> : <div></div>
     }

    </>
  )
}

export default Profile