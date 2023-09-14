import  jwt  from "jsonwebtoken";
const verifyUser  = async (req , res , next)=>{

    try{
        const token = req.header("x-auth-token");
        console.log(token);
        if(!token){
            console.log("token not found");
            return res.status(401).json({msg:"token not found"});
        }
        const verify =  jwt.verify(token , "Securekey");
        if(!verify){
            console.log("not verified token");
            return res.status(400).json({msg:"Token not authorized"});
        }
        console.log(verify.id);
        req.user = verify.id;
        req.token = token;
        next();

    } catch(e){
        console.log(e);
        return res.status(500).json({error:e.message});
    }
}

export default verifyUser;


























