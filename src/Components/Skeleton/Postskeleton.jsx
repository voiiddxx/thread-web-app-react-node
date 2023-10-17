import React from 'react'
import "./Postskeleton.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Postskeleton = () => {

  return (
    <>

   <div className="s-post">
   <div className="s-main">
        <div className="s-card-upper">
            <Skeleton circle height={40} width={40}/>
            <Skeleton height={10} width={150} />
        </div>
        <div className="s-post-card">
            <Skeleton height={350} width={550}/>
        </div>

        <div className="s-lower">
            <Skeleton circle height={20} width={20} />
            <Skeleton circle height={20} width={20} />
        </div>

        <div className="s-border">
            <Skeleton height={3}  />
        </div>
    </div>
   </div>
    </>
      
    
  )
}

export default Postskeleton
