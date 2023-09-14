import React, { useEffect, useState } from 'react'
import "./Viewreplypost.css"
import axios from 'axios'
import Replyfiles from './Replyfiles';

const Viewreplypost = () => {

    const [UserRepost, setUserRepost] = useState(null);

    const GetcurrRepost = async ()=>{
        const reponse = await axios.get("http://localhost:5000/get-curr-user-repost" , {
            headers:{
                "x-auth-token":localStorage.getItem("x-auth-token")
            }
        });
        
        setUserRepost(reponse.data);
        
    }

    useEffect(()=>{
        GetcurrRepost();
    } , []);
  return (
   <>
    {
        UserRepost!==null ? 
        UserRepost.map((curr , index)=>{
            return <Replyfiles {...curr}/>
        })
         : <h1>There is no post </h1>
    }
   </>
  )
}

export default Viewreplypost