import { Router } from "express";
import verifyUser from "../../middlewares/verify.js";
import Repost from "../../models/repostmodel.js";
import { User } from "../../models/user.js";
import { Post } from "../../models/post.js";

const repostRouter = Router();

// CREATING API TO REPOST THE THREAD


repostRouter.post("/repost-thread" , verifyUser , async(req , res)=>{
    try{
        const {postid} = req.body;
        const curruser = await User.findById(req.user);
        const repliedpost = await Post.findById(postid);
        const {user , post , replypost} = req.body;
        let repost = new Repost({
            user:curruser,
            post:repliedpost,
            replypost,
        });

        await repost.save();

        res.json(repost);

    } catch(e){
        res.status(500).json({e:e.message});
    }
});


// CREATING API FOR GETTING THE CURRENT USER REPOST//

    repostRouter.get("/get-curr-user-repost" , verifyUser , async(req , res)=>{
        try{
            let currUser = await User.findById(req.user);
            let rpost = await Repost.find({user:currUser});
            res.json(rpost);
        } catch(e){
            res.status(500).json({e:e.message});
        }
    })

export default repostRouter;