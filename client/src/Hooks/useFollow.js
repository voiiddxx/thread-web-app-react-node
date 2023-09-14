import axios from 'axios';

export const useFollow = () => {
    
    const token = localStorage.getItem("x-auth-token");
    const Following = async (username)=>{
        const bodyy = {
            username:username
        }
        let axiosConfig = {
            headers: {
                "Accept":"application/json",
                "x-auth-token":token
            }
          };
        try{
            const response = await axios.post("https://thread-web-app-react-node-api.vercel.app/add-follow-unfollow" , bodyy , axiosConfig );
            console.log(response.data);
        } catch(e){
            console.log(e);
        }
    }
    return {Following}
}
