
import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth"
import "./Login.css"

const Login = () => {


  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const {login} = useAuth();


  const handleEvent = async (e)=>{
    e.preventDefault();
    console.log(username , password);

     await login(username , password);
  }

    
  return (
    <div className="register-main">
     <div className="auth-part">
      <div className="auth-form">
        <p className='heading'>Login with valid credentials</p>
        <form onSubmit={handleEvent} >
          <input type="text" placeholder='Enter Username!' onChange={(e)=>{
            setusername(e.target.value)
          }} />

          <input type="password" placeholder='Password' onChange={(e)=>{
            setpassword(e.target.value)
          }}/>
          <input className='submit-button' type="submit"  />

          <p>Don't Have an Account? <span>Create Now</span></p>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Login