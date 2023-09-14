import { Router } from "express";
import verifyUser from "../../middlewares/verify.js";
import { User } from "../../models/user.js";

const folowRouter = Router();

// CREATING API TO FOLLOW THE USER
  folowRouter.post("/add-follow-unfollow" , verifyUser , async (req , res)=>{
      try{
        const {username , profie} = req.body;
        let userwhohavetofollow = await User.find({username:username});
        let curruser = await User.findById(req.user);

        if(userwhohavetofollow[0].followers.length == 0){
         await userwhohavetofollow[0].followers.push({
            userid:req.user,
            profilepic:curruser.profilepic,
            username:curruser.username

        });
        }
        else{
          let found = false;
          for(let i =0;i<userwhohavetofollow[0].followers.length;i++){
            if(userwhohavetofollow[0].followers[i].username == curruser.username){
              found = true;
            }
          }

          if(found){
            await userwhohavetofollow[0].followers.remove({
              userid:req.user,
              profilepic:curruser.profilepic,
              username:curruser.username
            });

          }
          else{
           await userwhohavetofollow[0].followers.push({
              userid:req.user,
              profilepic:curruser.profilepic,
              username:curruser.username
  
          });
          }
        }

        // ADD TO FOLLOWING 
         if(curruser.following.length ==0){
          await curruser.following.push({
            userid:userwhohavetofollow[0]._id,
            profilepic:userwhohavetofollow[0].profilepic,
            username:userwhohavetofollow[0].username
          });
         } else{
          let followingfound = false;
          for(let i =0 ; i<curruser.following.length;i++){
            if(curruser.following.username == userwhohavetofollow[0].username){
              followingfound = true;
            }
          }

          if(followingfound){
            curruser.following.remove({
              userid:userwhohavetofollow[0]._id,
              profilepic:userwhohavetofollow[0].profilepic,
              username:userwhohavetofollow[0].username
            }) ;
          }
          else{
            curruser.following.push({
              userid:userwhohavetofollow[0]._id,
              profilepic:userwhohavetofollow[0].profilepic,
              username:userwhohavetofollow[0].username
            });
          }
         }

         await curruser.save();
        await userwhohavetofollow[0].save();
       
          
        res.json("Followed")
      } catch(e){
        console.log(e);
        res.status(500).json({error:e.message})
      }
  })
export default folowRouter;