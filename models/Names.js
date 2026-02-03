
import mongoose,{Schema} from "mongoose";

const nameschema = new mongoose.Schema({
    fistName:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:false
    }
})
const Names = mongoose.model("Names",nameschema)
export default Names