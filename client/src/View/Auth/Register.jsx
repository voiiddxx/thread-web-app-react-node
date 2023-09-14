import React, {  useState } from 'react'
import './Register.css'
import { useAuth } from '../../Hooks/useAuth';
const Register = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const {Register} = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    Register(userName , email , password);

    
  }
  return (
    <div className="register-main">
     <div className="auth-part">
      <div className="auth-form">
        <p className='heading'>Create Your Thread Account!</p>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Enter Username!' onChange={(e)=>{
            setuserName(e.target.value)
          }} />
          <input type="email" placeholder='Enter Email Address' onChange={(e)=>{
            setemail(e.target.value)
          }} />
         
          <input type="password" placeholder='Password' onChange={(e)=>{
            setpassword(e.target.value)
          }} />
          <input className='submit-button' type="submit"  />

          <p>Already Have an Account? <span>Login Now</span></p>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Register