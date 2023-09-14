import axios from 'axios';


export const useAddpost = () => {

    const AddThread =  async (userId , username , thread , threadimage , profilepic)=>{
        const token = localStorage.getItem("x-auth-token");
      

        const config = {
            headers:{
                    "Content-Type": "application/json",
                     "x-auth-token": token
               }
        }

        const response = await axios.post("http://localhost:5000/post-thread" , {
            userId:userId,
            username:username,
            thread:thread,
            threadimage:threadimage,
            profilepic:profilepic,
        } , config  );

        if(response.status === 200){
            alert("Thread added succfully");
            console.log(response.data);
        }
        else{
            alert("some error occured");
            console.log(response.data);
        }
       
    }
  return {AddThread};
}

