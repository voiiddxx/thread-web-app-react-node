import React, { useContext, useState } from 'react'
import "./Postmodal.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { Authcontext } from '../../Contexts/Authcontext'
import { useAddpost } from '../../Hooks/useAddpost'
import axios from 'axios'

const Postmodal = ({closemodal}) => {

    const {AddThread} = useAddpost();

    const {user} = useContext(Authcontext);
    const [Threadimage, setThreadimage] = useState(null);
    const [imagetoshow, setimagetoshow] = useState("");
    let files = [];

    const [threadtext, setthreadtext] = useState("");

    const handleimage = ()=>{
        
        console.log(Threadimage[0]);
        let formData = new FormData();
        formData.append("file" , Threadimage[0]);
        formData.append("upload_preset" , "qouutdij");

        console.log(formData);

        axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formData , {
            onUploadProgress:(ProgressEvent)=>{
              console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
            }
          }).then(response=>{
         console.log(response.data.url);
         files.push(response.data.url);
         setimagetoshow(files);
          });

      

       
    }


    const PostThread = async (e)=>{
        e.preventDefault();
      await AddThread(user._id , user.username , threadtext , imagetoshow[0] , user.profilepic);
    }
    


    
  
  return (
    <>
   <div className="modal-main">
    <h1>New thread</h1>
    <div className="modal-card">
        <div className="card-left">
            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="addpost" />
        </div>
        <div className="card-right">
            <p>{user.username}</p>
            <form className='postmodal-form'>
            <input className='postmodal-input' type="text" placeholder='Start a thread' onChange={(e)=>{
                setthreadtext(e.target.value)
            }} />
            <input className='postmodal-input-image' type="file" hidden  onChange={(e)=>{
                setThreadimage(e.target.files);
            }} />

          
           {
            imagetoshow!=="" ? <figure>
                <img className='imageshow' src={imagetoshow} alt="imagetoshow" />
            </figure> : <FontAwesomeIcon onClick={()=>{
                document.querySelector(".postmodal-input-image").click()
            }} icon={faPaperclip} size="xl" style={{color: 'grey',}} />
           }
              {
                imagetoshow!=="" ? <p></p>:<p onClick={handleimage} className='show'>Show Image</p>
              }
            <input onClick={PostThread} className='post-button' type="submit" hidden/>

            </form>
            <div className="postmodal-button">
                <h1 onClick={closemodal} className='postNow' >Discard</h1>
                
                <h1 onClick={()=>{
                    document.querySelector(".post-button").click();
                }} className='postNow'>Post</h1>

            </div>


         

        </div>
    </div>
   </div>


  
    </>
  )
}

export default Postmodal