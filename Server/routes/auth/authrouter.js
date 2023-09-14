import { Router } from "express";
import {User} from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyUser from "../../middlewares/verify.js"
import { Post } from "../../models/post.js";

const authRouter = Router();



// CREATING ROUTE FOR REGISTERING THE USER

authRouter.post("/register" , async (req , res)=>{
    try{
        const  {username , email , password} = req.body;

        const usernameAvailable = await User.findOne({username});

        if(usernameAvailable){
            res.status(400).json({msg:"This Username is already Exist , Try another username"});
        }
        else{
            const emailExist = await User.findOne({email});
            if(emailExist){
                res.status(400).json({msg:"This Email Address Already Exist , Try Another Email Address"});
            }
            else{

                const hashPass = await bcrypt.hash(password , 10); 
                let user = new User({
                    username,
                    email,
                    password:hashPass,
                    profilepic:'',
                    bio:"",
                    following:[],
                    threads:[],
                    followers:[],


                });

                user = await user.save();
                console.log(user);
                res.json(user);
            }
        }

    } catch(e){
        res.status(500).json({error:e.message});
    }
});


// CREATING ROUTE FOR USER LOGIN

authRouter.post("/login" , async (req , res)=>{
   try{
    const {username , password} = req.body;
    console.log(username , password);
    const Existuser = await User.findOne({username});
    if(!Existuser){
        res.status(400).json({msg:"Invalid username"});
    }
    else{
        const isMatch = await bcrypt.compare(password , Existuser.password);
        if(!isMatch)
        {
            res.status(400).json({msg:"Wrong Password"});
        }
        else{
            const token =  jwt.sign({id:Existuser._id} , "Securekey");
            console.log({...Existuser._doc});
            console.log(token);
          
            res.json({...Existuser._doc , token});
        }
        
 
         
        
    }
   } catch(e){
    res.status(500).json({error:e.message})
   }

});


// CREATING API FOR GETTING USER DATA

authRouter.get("/get-curr-user" , verifyUser  , async (req , res)=>{
    try{
        const user = await User.findById(req.user);
        console.log(user);
        res.json(user)
        
    } catch(e){
        console.log(e);
        res.status(500).json({error:e.message});
    }
}  )



// CREATING API FOR UPDATING PROFILE FOR USER

authRouter.patch("/update-profile" , verifyUser , async(req , res)=>{
    try {
        const {profilepic} = req.body;
        let user = await User.findByIdAndUpdate( req.user , {profilepic:profilepic} , {
            new:true
        });
    
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});

    }

});



authRouter.get("/get-specifilc-user" , verifyUser , async(req , res)=>{
    try{
        let user = await User.find({username:req.query.username});
        res.json(user[0]);

    } catch(e){
        return res.status(500).json({e:e.message});
    }
});


authRouter.get("/get-user-specific-post" , verifyUser , async(req,res)=>{
    try{
        let post = await Post.find({username:req.query.username});
        res.json(post);
    } catch(e){
    res.status(500).json({e:e.message});
    }
})


export default authRouter;