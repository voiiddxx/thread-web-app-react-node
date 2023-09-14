import React, { useContext, useState } from 'react'
import "./Reply.css"
import { Postcontext } from '../../Contexts/Postcontext';

const Reply = ({setfollow , postid}) => {

    const {replyTopost} = useContext(Postcontext);
    const [postingThread, setpostingThread] = useState("");

    const RepostNow = ()=>{
        replyTopost(postid , postingThread);
    }
  return (
    <>
    <div onClick={setfollow} className="reply-wrapper"></div>
    <div className="reply-main">
        <h1>Reply To The Post</h1>
       <form onSubmit={RepostNow} >
        <input onChange={(e)=>{
            setpostingThread(e.target.value)
        }} type="text" />
        <input className='select' type="submit" hidden />
      
       </form>
       <div onClick={()=>{
        document.querySelector(".select").click();
       }} className="repost-button">
       <p>Repost</p>
       </div>
    </div>
    </>
  )
}

export default Reply