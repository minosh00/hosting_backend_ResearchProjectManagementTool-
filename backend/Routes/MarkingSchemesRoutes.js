const express = require('express');
const router = express.Router();
const Marking_Schemes = require("../Model/MarkingSchemes");

//get data
router.get('/allMarking',(req,res)=>{
    Marking_Schemes.find()
    .then(add=>res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`))
});

// add new data 
router.post('/addMarking',(req,res)=>{
    const newMarking = new Marking_Schemes ({
        assiginmentName:req.body.assiginmentName,
        fullMarks:req.body.fullMarks,
        discription:req.body.discription,
        MandoryPoints:req.body.MandoryPoints,
       
    })    
    newMarking
    .save()
    .then(()=>{return res.json("The Marking Scheme is Successfully  Added")})
    .catch(err => res.status(400).json(`Error:${err}`));
});

// find by id 
router.get('/oneMark/:id',(req,res)=>{
    Marking_Schemes.findById(req.params.id)
    .then (add => res.json(add))
    .catch (err => res.status(400).json(`Error: ${err}`));
});
//find by id and update
router.put('/updateMarking/:id',(req,res)=>{
    Marking_Schemes.findById(req.params.id)
    .then(updateMarking=> {
        updateMarking.assiginmentName=req.body.assiginmentName,
        updateMarking.fullMarks=req.body.fullMarks,
        updateMarking.discription=req.body.discription,
        updateMarking.MandoryPoints=req.body.MandoryPoints,
        

        updateMarking
        .save()
        .then(()=> res.json("The Marking is Successfully Updated "))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));

});

    //find by id and delete
    router.delete('/deleteMarkingSchema/:id',(req,res)=>{
        console.log("id",req.params.id);
        Marking_Schemes.findByIdAndDelete(req.params.id)
        .then(() => res.json("The Marking Scheme is Deleted Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    
    })

module.exports = router;