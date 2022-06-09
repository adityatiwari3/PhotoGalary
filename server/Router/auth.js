const express = require('express');
const router = express.Router();
const Data = require("../data/Gallerydata");


router.get('/Take',async (req,res) => {
    console.log(Data);
    const data= await Data.find();
    //console.log(data);
    res.send(data);
});

router.post('/',(req,res)=>{
    //console.log(req.body);
    //res.send(req.body);
    //res.status(200).json({message:"hii welcome to main"});
    const {Name,URL,Detail}=req.body;
    if(!Name || !URL || !Detail)
    {
        return res.status(422).json({error: "please enter all the details "});
    }
    const data = Data({Name,URL,Detail});
    data.save().then(()=>{
        console.log("image added")
        res.status(201).json({message: "image added "})
    }).catch((err)=>{
        res.status(501).json(err);
    })
})

router.delete('/Delete/:name',async (req,res) =>{
    const Name = req.params.name;
    console.log(Name);
    const result = await Data.deleteOne({Name:Name});
    //console.log(result.deletedCount)
    //res.send(result);
    if(result.deletedCount)
    {
        res.status(201).json({message:"image deleted"});
        console.log("image deleted");
    }
})
router.put('/:Name/edit',async (req,res) =>{
    const Name=req.params.Name;
    //console.log(Name);
    //console.log(req.body);
    const {URL,Detail} = req.body;
    //console.log(Detail[0]);
    //console.log(URL[0]);
    const user= await Data.findOne({Name:Name});
    //console.log(user);
    user.URL=URL[0];
    user.Detail=Detail[0];
    await user.save().then(()=>{
        console.log("Details change")
        res.status(201).json({message: "Details change "})
    }).catch((err)=>{
        res.status(501).json(err);
    })
});
module.exports = router;