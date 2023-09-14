import { Router } from "express";
import {Post} from "../../models/post.js";
import { User } from "../../models/user.js";
import verifyUser from "../../middlewares/verify.js";

const likeRouter = Router();

// CREATING API FOR LIKING USER POSTS

likeRouter.post("/like-user-post" , verifyUser, async  (req , res)=>{
  
   try {
     const post = await Post.find({_id:req.query.postid});
     const Existuser = await User.findById(req.user);
     let found = false;
     
         for(let i =0;i<post[0].like.length;i++){
             if(post[0].like[i].user.username === Existuser.username){
                 found = true;
             }
         }
     
     if(found){
         await post[0].like.remove({user:Existuser});
     }
     else{
         await post[0].like.push({user:Existuser});
     }
    
 
     await post[0].save();
     console.log(post);
 
     res.json(post);
   } catch (error) {
    res.status(500).json({error:error.message});
   }
    
});


export default likeRouter;