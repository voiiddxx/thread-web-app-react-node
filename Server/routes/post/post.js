import { Router } from "express";
import verifyUser from "../../middlewares/verify.js";
import {Post} from "../../models/post.js";
import { User } from "../../models/user.js";

const postRouter = Router();


// CREATING API FOR POSTING THREAD

postRouter.post("/post-thread" , verifyUser , async (req , res)=>{
    try {
        
        const {userId , username , thread , threadimage , profilepic } = req.body;
        console.log(userId , username , thread , threadimage);
        let post = new Post({
            userId,
            username,
            thread,
            profilepic,
            threadimage,
            like:[],
            reply:[]

        });

        post = await post.save();
        res.json(post);

    } catch (e) {
        console.log(e);
        res.status(500).json({error:e.message});
    }

});



// CREATING API FOR GETTING ALL THE POST DATA


    postRouter.get("/get-all-data" , verifyUser , async (req , res)=>{
        try{
            let post = await Post.find({});
            res.json(post);
            
        } catch(e){
            console.log(e);
            res.status(500).json({e:e.message});
        }
    });


// CREATING API FOR GETTING THE USER ONLY POST

   postRouter.get("/get-user-thread" , verifyUser , async(req , res)=>{
    try{
     const post = await Post.find({userId:req.user});
     res.json(post);

    } catch(e){
        res.status(500).json({error:e.message});
    }
   })
export default postRouter;
