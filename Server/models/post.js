import { Schema, model } from "mongoose";
import {userSchema} from "./user.js"

const postSchema = Schema({
    username:{
        type:String,
    },
    userId:{
        type:String,
    },
    thread:{
        type:String
    },
    profilepic:{
        type:String
    },
    
    threadimage:{
        type:String
    },


    like:[
        {
            user:userSchema
        }
    ],
    reply:[
        {
            user:userSchema,
            comment:{
                type:String
            }
        },

    ]
});


const Post = model("Post" , postSchema);
export  {Post , postSchema};