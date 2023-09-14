import React, { useContext } from 'react'
import "./Addpost.css"
import { Authcontext } from '../../Contexts/Authcontext'

const Addpost = () => {
  const {user} = useContext(Authcontext);
  return (
    <>
    <div className="addpost-main">
      <div className="addpost-left">
        <img src={user.profilepic} alt="addpost" />
        <p>Start a Thread...</p>
      </div>
      <div className="addpost-right">
        <p className='addpost-button'>Post</p>
      </div>

    </div>

    <hr />

    </>
  )
}

export default Addpost