import React, { useContext } from 'react'
import { Postcontext } from '../../Contexts/Postcontext'
import Viewpost from '../../Components/post/Viewpost';

const Allpost = () => {
    const {isPostLoading , posts} = useContext(Postcontext);
    
    if(isPostLoading){
        return <div>Please Wait Threads Are Loading</div>
    }
  return (
    <>
    <div className="posts-main">
        {
            posts.map((curr , index)=>{
                return <Viewpost key={index+1} {...curr}/>
            })
        }
    </div>
    </>
  )
}

export default Allpost