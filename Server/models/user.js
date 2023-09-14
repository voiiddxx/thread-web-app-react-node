import { Schema, model } from "mongoose";

const userSchema = Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    profilepic:{
        type:String,
        default:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
    },
    bio:{
        type:String,
    },
    followers:[
        {
           userid:{
            type:String,
           },
           profilepic:{
            type:String
           },
           username:{
            type:String
           }
        }
    ],
    following:[
        {
            userid:{
             type:String,
            },
            profilepic:{
             type:String
            },
            username:{
             type:String
            }
         }
    ]
    
    

});

const User = model("User" , userSchema);

export {User , userSchema};