import React from 'react'
import "./Commentcard.css"
const Commentcard = (curr) => {
    console.log(curr);
    const {comment} = curr;
    const {username}= curr.user;
    const {profilepic} = curr.user;
  return (
    <div className="c-card">
        <div className="c-upper">
            <div className="c-left">
               {
                profilepic=="" ?  <img className='profile' src="https://images.unsplash.com/photo-1660866838821-0c12213703df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="profile" /> : <img className='profile' src={profilepic} alt="profile" />
               }
                <p className="c-username">{username}</p>
            </div>
            <div className="c-right">
                <p className="right-p">...</p>
            </div>
        </div>

        <p className="thread-comment">
           {comment}
        </p>
        <div className="comment-border"></div>
    </div>
  )
}

export default Commentcard