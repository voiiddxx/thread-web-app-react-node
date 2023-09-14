// ALL IMPORTS
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth/authrouter.js";
import postRouter from "./routes/post/post.js";
import likeRouter from "./routes/like/like.js";
import commentRouter from "./routes/comment/commentroute.js";
import folowRouter from "./routes/follow/followRoute.js";
import repostRouter from "./routes/repost/repost.js";


// PORT
const PORT = 5000;




// CONNECTION TO DATABASE
mongoose.connect("mongodb+srv://ursfan8102003:Threads0000@cluster0.4tzktmw.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Database Connected Successfully 📢");
}) .catch((e)=>{
    console.log(e);
})



// INITIALIZING THE APP
const app = express();




// USING MIDDLEWARES
// USING MIDDLEWARES
app.use(cors(
    {
        origin:[""],
        methods:["POST" , "GET" , "PATCH"],
        credentials:true,
    }
));
app.use(express.json());
app.use(authRouter)
app.use(postRouter);
app.use(likeRouter);
app.use(commentRouter);
app.use(folowRouter);
app.use(repostRouter);






// STARTING THE SERVER

app.listen(PORT , (req , res)=>{
    console.log(`Server is running at ${PORT} 🚀`);
})
