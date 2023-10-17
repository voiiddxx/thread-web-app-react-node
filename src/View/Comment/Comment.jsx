import React, { useContext, useState } from 'react'
import "./Comment.css"
import { useLocation, useNavigate } from 'react-router'
import Nav from '../../Components/Nav/Nav';
import Commentcard from '../../Components/commentcard/Commentcard';
import { Postcontext } from '../../Contexts/Postcontext';
const Comment = () => {
  const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.post._id);
    const {commentOnThread} = useContext(Postcontext);
    const [Comment, setComment] = useState("");
    
    const PostComment = async(e)=>{
      e.preventDefault();
      await commentOnThread(location.state.post._id , Comment);
      navigate("/Home");
      
    }
  
   
    
  return (
   <>
  <div className="comment-main">
  <Nav/>
   <hr />
   <div className="comment-textfiled">
   <div className="comment-input">
    <form >
      <input type="text" placeholder='Reply' onChange={(e)=>{
        setComment(e.target.value)
      }} />
      <input className='comment-submit-button' type="submit" hidden onClick={PostComment}   />
    </form>

    <button onClick={()=>{
      document.querySelector(".comment-submit-button").click()
    }} className='comment-button'>Post Comment</button>
   </div>
   </div>
    
   <h1 className="comment-heading">
    All Replies
   </h1>

   <div className="comment-box">
    {location.state.post.reply?.length>0 ? 
    location.state.post.reply.map((curr , index)=>{
      return <Commentcard key={index} {...curr}/>
    })
     : <h1>No reply available</h1>}
   </div>


  </div>
   </>
  )
}

export default Comment