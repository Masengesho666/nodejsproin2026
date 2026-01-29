import express from "express";
import {getNames,CreateNames,getName,deleteName,updateNames} from "../controller/names.js"

const router = express.Router();

router.get("/", getNames)
router.get("/:id", getName)


 router.post("/:myName", CreateNames)
 router.delete("/:id", deleteName)
 router.put("/:id", updateNames)




export default router
