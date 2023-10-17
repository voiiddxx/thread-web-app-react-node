import React, { useContext } from 'react'
import { Postcontext } from '../../Contexts/Postcontext'
import Viewpost from '../../Components/post/Viewpost';
import 'react-loading-skeleton/dist/skeleton.css'
import Postskeleton from '../../Components/Skeleton/Postskeleton';

const Allpost = () => {
    const {isPostLoading , posts} = useContext(Postcontext);
    
    if(isPostLoading){
      return <>
      <Postskeleton/>
      <Postskeleton/>
      </>
    }
  return (
    <>
    <div className="posts-main">
        {
            posts.length <1 ? <p>Sorry There is No Posts</p> :posts.map((curr , index)=>{
                return <Viewpost key={index+1} {...curr}/>
            })
        }
    </div>
    </>
  )
}

export default Allpost