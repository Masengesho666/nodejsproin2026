import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    try{
        //get token from cookies
        const token = req.cookies.token;

    if(!token){
return res.status(401).json({ message: "access denied. no token provided"});

    };

//verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
//save user info to request 
req.user = decoded;
next();
}
catch(err){
    return res.status(401).json({ message: "invalid token"});

}};
export default authMiddleware;


