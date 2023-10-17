import React, { useContext } from 'react'
import "./Viewreplypost.css"

const Replyfiles = (curr) => {
    console.log("fetched data " , curr);
  return (
    <>
    <div className="view-reply-main">
    <div className="repost-card">

       <div className="reply-user-upper">
       <div className="reply-user">
            <div className="reply-user-left">
                <img src={curr.user.profilepic} alt="iamgoat" />
                <h1>{curr.user.username}</h1>
            </div>
            <div className="reply-user-right">
            <p>...</p>
        </div>
        </div>

        <div className="reply-thread">
          <p>  {curr.replypost}</p>
        </div>
       </div>

       <div className="replied-post">
        <div className="replied-post-upper">
            <div className="upper-reply-left">
 <img src={curr.post.profilepic} alt="thisis" />
 <p>{curr.user.username}</p>
            </div>
            <div className="right-upper-post"></div>
        </div>

        <p className="post-thread">{curr.post.thread}</p>
        <img className='post-image' src= {curr.post.threadimage} />
       </div>


        
    </div>
   
    
</div>
<div className="border-line"></div>
</>

  )
}

export default Replyfiles