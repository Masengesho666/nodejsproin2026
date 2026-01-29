import Names from "../models/Names.js"

const getNames = async(req,res)=>{
  try{
const name = await Names.find();
res.json(name)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const getName = async(req,res)=>{
  try{
    const id = req.params.id;
    const name = await Names.findById(id);
    res.json(name)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const CreateNames = async(req,res)=>{
  try{
    const fistName = req.params.myName;
    const { lastname} = req.body;
    const name = new Names({fistName,lastname});
    await name.save();
    res.send(name)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const updateNames = async(req,res)=>{
  try{
    const id = req.params.id;
    const updateName = await Names.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updateName)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

const deleteName = async(req,res)=>{
  try{
    const id = req.params.id;
    const deleteName = await Names.findByIdAndDelete(id);
    res.json(deleteName)
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

export {getNames,CreateNames,getName, deleteName, updateNames}
