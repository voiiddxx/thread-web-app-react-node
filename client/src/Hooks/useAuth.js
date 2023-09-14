
import axios from 'axios';
import { useNavigate } from 'react-router';

export const useAuth = () => {
    const navigate = useNavigate();
    const Register = async (username , email , password)=>{
        const response = await fetch("https://thread-web-app-react-node-api.vercel.app/register" , {
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
        axios.defaults.withCredentials = true;
        const response = await axios.post("https://thread-web-app-react-node-api.vercel.app/login" , bodyPara , config);

        console.log(response.data.token);
        localStorage.setItem("x-auth-token" , response.data.token);
        
        navigate("/Home");

        console.log(response.data);
    }

    
   return {Register , login}
}
