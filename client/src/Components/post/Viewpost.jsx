import React, { useContext, useState } from 'react'
import "./Viewpost.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {    faHeart, faReply, faShareNodes  } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { Postcontext } from '../../Contexts/Postcontext'
import { useNavigate } from 'react-router'
import Reply from '../../View/Replypost/Reply'

const Viewpost = (curr) => {
  const {username , thread , threadimage , like , reply , _id , profilepic} = curr;
  console.log(curr);
  const {likeThepost} = useContext(Postcontext);
  const LikeNow = async ()=>{
   await likeThepost(_id);
  }
  const {posts} = useContext(Postcontext);
  const navigate = useNavigate();


  const navigateTocomment = ()=>{
        
    navigate("/Comment" , {state : {post:curr}});
  }

  const navigateToanotheruser = async()=>{
    navigate("/Otherprofile" , {state: {username:username}});
  }

  const [ReplyMode, setReplyMode] = useState(false);


  const closeReply = ()=>{
    setReplyMode(false);
  }
  
  return (
    <>
    <div className="view-main">
        <div className="view-upper">
           <div className="upper-left">
           <img  className='view-user-image' src={profilepic} alt="userimage" />
           <p onClick={navigateToanotheruser} className='upper-username'>{username}</p>
           </div>

           <div className="upper-icon">
            <h1>...</h1>
           </div>
        </div>

        <div className="view-card">
            <div className="view-border"></div>
            <div className="view-content">
                <div className="content-text">
                <p className='content-p' >{thread}</p>
                </div>
                <div className="content-image">
   {
    threadimage!=null ? <img className='content-img' src= {threadimage} alt='image' /> : <div></div>
   }
                </div>

                <div className="content-icons">
                <FontAwesomeIcon onClick={LikeNow} className='icons' icon={faHeart} size="m" style={{color: 'grey',}} />
                <FontAwesomeIcon className='icons' icon={faCommentDots} onClick={navigateTocomment} size="m" style={{color: 'grey',}} />
                <FontAwesomeIcon className='icons' icon={faReply} size="m" style={{color: 'grey',}} />
                <FontAwesomeIcon className='icons' icon={faShareNodes} size="m" style={{color: 'grey',}} onClick={()=>{
                  setReplyMode(true)
                }} />
                </div>

                <div className="content-reach">
                    <p>{reply.length} replies</p>
                    <p> {like.length} Likes</p>
                </div>
                
                
            </div>
        </div>

        <div className="view-bottom-border">
            
        </div>
    </div>
    {
    ReplyMode != false ? <Reply setfollow={closeReply} postid={_id} /> : <p></p>
    }
    </>
  )
}

export default Viewpost