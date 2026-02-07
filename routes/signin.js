import express from "express"

import signin from "../controller/signin.js"



const router=express.Router()


router.post("/", signin);

// router.get("/signin",signin)


export default router ; 