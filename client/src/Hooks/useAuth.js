
import axios from 'axios';
import { useNavigate } from 'react-router';

export const useAuth = () => {
    const navigate = useNavigate();
    const Register = async (username , email , password)=>{
        const response = await fetch("http://localhost:5000/register" , {
            method:"POST" , 
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                username:username,
                email:email,
                password:password
            })
        });

        if(response.status === 200){
            alert("user saved")
            console.log(response.json);
            navigate("/Login")
        }
        else{
            alert("some error occured");
            console.log(response.body);
        }
    }

    const login = async (username , password) =>{
        console.log(username , password)

        const bodyPara = {
            username:username,
            password:password
        };

        const config = {
            headers:{
                "Content-Type": "application/json",
            },
        }
        
        const response = await axios.post("http://localhost:5000/login" , bodyPara , config);

        console.log(response.data.token);
        localStorage.setItem("x-auth-token" , response.data.token);
        
        navigate("/Home");

        console.log(response.data);
    }

    
   return {Register , login}
}
