import React, { useContext, useState } from 'react'
import "./Follow.css"
import { Authcontext } from '../../Contexts/Authcontext'

const Follow = ({close}) => {

    const {user} = useContext(Authcontext);
    console.log(user.following);
    console.log(user.followers);

    const [followbutton, setfollowbutton] = useState(true);
    

    
  return (

    <>
    <div onClick={close} className="closebutton"></div>
    <div className="follow-main">
        <div className="follow-card">
         <div className="follow-heading">
            <p onClick={()=>{
                setfollowbutton(true);
            }}> {user.followers?.length} Follower</p>
            <p onClick={()=>{
                setfollowbutton(false);
            }} > {user.following?.length} Following</p>
         </div>

         <div className="up-follow-border"></div>

         {
            followbutton===true && user.followers?.length > 0 ? 
            user.followers.map((curr , index)=>{
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
            followbutton===false && user.following?.length>0 ? 
            user.following?.map((curr , index)=>{
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
        
    {/* {
      followbutton==true &&  user.followers?.length >= 0 ? 
        user.following.map((curr , index)=>{
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
         :<h1 className='nodata'></h1>
    } */}


       
        </div>


    </div>
    </>
  )
}

export default Follow