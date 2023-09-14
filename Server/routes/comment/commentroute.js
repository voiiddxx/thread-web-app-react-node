import { Router } from "express";
import verifyUser from "../../middlewares/verify.js";
import {Post} from "../../models/post.js";
import { User } from "../../models/user.js";
const commentRouter = Router();





//  CREATING API TO STORE THE COMMENT OF POST INTO THE POST DATA

commentRouter.post("/add-comment" , verifyUser , async(req , res)=>{
    try {
        const {comment} = req.body;
        const post = await Post.find({_id:req.query.postid});
        const existUser = await User.findById(req.user);
        await post[0].reply.push({user:existUser , comment:comment});
        await post[0].save();
        res.json(post)
    } catch (error) {
        console.log(error);
        res.status(500).json({errror:error.message});
    }

})
export default commentRouter;
