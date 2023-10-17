import React, { useContext, useState } from 'react'
import "./Follow.css"
import { Authcontext } from '../../Contexts/Authcontext';

const Otherfollow = ({closefollow , getData}) => {
  const {user} = useContext(Authcontext);
  

    const [followbutton, setfollowbutton] = useState(true);
    
  return (
    <>
    <div onClick={closefollow} className="closebutton"></div>
    <div className="follow-main">
        <div className="follow-card">
         <div className="follow-heading">
            <p onClick={()=>{
                setfollowbutton(true);
            }}> {getData.followers?.length} Follower</p>
            <p onClick={()=>{
                setfollowbutton(false);
            }} > {getData.following?.length} Following </p>
         </div>

         <div className="up-follow-border"></div>

         {
            followbutton===true && getData.followers?.length > 0 ? 
            getData.followers.map((curr , index)=>{
                return  <div className="follow-section">
                <div className="follow-pannel">
                    <div className="follow-pannel-left">
                    <img src={curr.profilepic} alt="ronaldo" />
                    <p>{curr.username}</p>
                    </div>
                    <div className="follow-right">
                        <p>Follow</p>
                    </div>
        
        
                 </div>
        
                 <div className="follow-down-border"></div>
                </div>
            })
             : <h1></h1>
         }

         {
            followbutton===false && getData.following?.length>0 ? 
            getData.following?.map((curr , index)=>{
                return  <div className="follow-section">
                <div className="follow-pannel">
                    <div className="follow-pannel-left">
                    <img src={curr.profilepic} alt="ronaldo" />
                    <p>{curr.username}</p>
                    </div>
                    <div className="follow-right">
                        <p>Follow</p>
                    </div>
        
        
                 </div>
        
                 <div className="follow-down-border"></div>
                </div>
            })
             :<h1></h1> 
         }
        
   

       
        </div>


    </div>
    </>
  )
}

export default Otherfollow