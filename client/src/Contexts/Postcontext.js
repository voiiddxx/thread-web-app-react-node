import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducers/PostReducer"
import { Navigate } from "react-router";

const Postcontext = createContext();
const GetPostAPI = "http://localhost:5000/get-all-data";


const initialState = {
    isPostLoading:false,
    isPostError:false,
    posts: [],
    userpost:[]
}






const Postprovider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const [reducervalue , forceupdate] = useReducer(x=>x+1 , 0);
    const token = localStorage.getItem("x-auth-token");

    const getAllPost =  async()=>{
        try{
            dispatch({type:"POST_API_LOADING"});
            const response = await axios.get(GetPostAPI , {
                headers:{
                    "x-auth-token": token
                }
            } );

            if(response.status === 200){
                const allposts = await response.data;
                dispatch({type:"SET_ALL_POSTS" , payload:allposts});
                console.log(allposts);
            } else{
                console.log(response.data);
            }
        } catch(e){
            dispatch({type:"POSTS_API_ERROR"});
            console.log(e);
        }
    }

    const likeThepost = async (id)=>{

        
        try{
            var postData = {

            }

            let axiosConfig = {
                headers: {
                    "Accept":"application/json",
                    "x-auth-token":token
                }
              };
            const likerespose = await axios.post("http://localhost:5000/like-user-post?postid="+id , postData , axiosConfig );
            console.log(likerespose);
            forceupdate();
            
        } catch(e){
            console.log(e);
        }
    }


    // COMMENT ON POST

    const commentOnThread = async (id , comment)=>{
        try{
            const bodyPara = {
                comment:comment
            }
            let axiosConfig = {
                headers: {
                    "Accept":"application/json",
                    "x-auth-token":token
                }
              };
              const respose = await axios.post("http://localhost:5000/add-comment?postid="+id , bodyPara , axiosConfig);
              console.log(respose.data);
              forceupdate();
              Navigate("/Home");
        } catch(e){
            console.log(e);
        }
    }


    const getUserPost = async ()=>{
        try{
            const respose = await axios.get("http://localhost:5000/get-user-thread" , {
                headers:{
                    "x-auth-token":token
                }
            });
            dispatch({type:"SET_USER_POST" , payload:respose.data});

        } catch(e){
            console.log(e);
        }
    }

    const replyTopost = async (id , replypost)=>{

        alert("this is working");
        const bodyData = {
            postid:id,
            replypost:replypost
        }

        let axiosConfig = {
            headers: {
                "Accept":"application/json",
                "x-auth-token":token
            }
          };
        
        try{
            const response = await axios.post("http://localhost:5000/repost-thread" , bodyData , axiosConfig );
            console.log(response.data);
            alert("done")
        } catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getAllPost();
        getUserPost();  
  // eslint-disable-line react-hooks/exhaustive-deps
    } , [reducervalue]);





    return <Postcontext.Provider value={{...state , likeThepost , commentOnThread , getUserPost , replyTopost}}>{children}</Postcontext.Provider>
}

export {Postcontext , Postprovider};
