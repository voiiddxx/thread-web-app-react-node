import { Schema, model } from "mongoose";
import { userSchema } from "./user.js";
import { postSchema } from "./post.js";

const repostSchema = Schema({
    
    user:userSchema,
    replypost:{
        type:String,
    },
    post:postSchema
});

const Repost = model("Repost" , repostSchema);
export default Repost;