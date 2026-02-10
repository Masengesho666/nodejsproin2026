import express from "express";
import authMiddleware from "../middleware/auth.js";
import {getNames,CreateNames,getName,deleteName,updateNames} from "../controller/names.js"

const router = express.Router();

router.get("/",authMiddleware, getNames)
router.get("/:id", authMiddleware, getName)


 router.post("/:myName",authMiddleware, CreateNames)
 router.delete("/:id",authMiddleware, deleteName)
 router.put("/:id", authMiddleware, updateNames)




export default router
