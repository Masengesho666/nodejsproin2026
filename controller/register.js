import signup from "../models/register.js";
import bcrypt from "bcrypt"
const register =async(req,res)=>{
  

    try{
        const data=req.body;
        const salt= await bcrypt.genSalt(7);
       
        const check=await signup.findOne({email:data.email})
        const hashpaword=await bcrypt.hash(data.password,salt)
        data.password=hashpaword;
        res.send(data);
        if(check){
           
            return res.status(409).json({
                message:"user already exist with this email",
            })
        }

  else{  
        let registerInstance=new signup({
            email:data.email,
            password:data.password
          
           

        });
       
 
   let result = await registerInstance.save()
  
        res.status(200).json({
             message:"data saved successfully",
             error:null,
            data:result
         
        })
  


    }}
    catch(erro){
  console.log("error catched", erro)
  res.status(500).json({
    message:"failed to save the data",
    error:"failed"
})

    
    }
 
}
export default register;

