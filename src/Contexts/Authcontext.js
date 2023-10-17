import axios from "axios";
import { createContext, useReducer, useState } from "react";
import reducer from "./reducers/UserReducer.js"
import { Navigate } from "react-router";

const Authcontext = createContext();

const initialState = {
    isLoading : false,
    isError:false,
    user: {

    },
    threads:[],
    following:[],
    followers:[]
}



const AuthProvider = ({children}) =>{

   const [state, dispatch] = useReducer(reducer , initialState);
   const [reducerval , forceupdate] = useReducer(x=>x+1 , 0);

    const getCurrUser = async ()=>{
        dispatch({type:"API_LOADING"});
    const token = localStorage.getItem("x-auth-token");
       try {
         const response = await axios.get( "http://localhost:5000/get-curr-user" , {
             headers:{
                 "x-auth-token":token
             }
         } );
         console.log(response.data);
         const value = await response.data;
         dispatch({type:"SET_CURR_DATA" , payload: value})
       } catch (error) {
        console.log(error);
        dispatch({type:"API_ERROR"})
       }
    }


    const updateProfilepic = async(profilepic)=>{
        
        const token= localStorage.getItem("x-auth-token");
        const bodaparameter = {
            profilepic:profilepic
        }
        let axiosConfig = {
            headers: {
                "Accept":"application/json",
                "x-auth-token":token
            }
          };
        try{
            const response = await axios.patch("http://localhost:5000/update-profile" , bodaparameter , axiosConfig  );
            console.log(response.data);
            alert("profilepic changed")
            forceupdate();
        } catch(e){
            console.log(e);
        }
    }

    const getSpecificUser =  async(username)=>{
        const token = localStorage.getItem("x-auth-token");
        try {
            const response = await axios.get("http://localhost:5000/get-specifilc-user?username="+username , {
                headers:{
                    "x-auth-token":token
                }
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useState(()=>{
        getCurrUser();
   
    } , [reducerval]);
    return <Authcontext.Provider value={{...state , updateProfilepic , getSpecificUser}}>{children}</Authcontext.Provider>

}

export {AuthProvider ,Authcontext};