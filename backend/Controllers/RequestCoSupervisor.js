

const mongoose = require('mongoose');
const CoSupervisor = require("../Model/CoSupervisorRequest");



const getAllCoSupervisorRequest = async (req, res) => { 
    let id = req.params;
    console.log("CosupervisorID",id.id);
    try {
        const coSupervisors = await CoSupervisor.find({"CosupervisorID" : id.id});
                 
        res.status(200).json(coSupervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const updateCoSupervisorByID = async (req, res) => {

    const { id } = req.params;
    const {  GroupID, GruopLeaderEmail ,supervisorID,status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatedSupervisor = {  GroupID, GruopLeaderEmail ,supervisorID,status, _id:id};

    await CoSupervisor.findByIdAndUpdate(id, updatedSupervisor, { new: true });

    res.json(updatedSupervisor);
}




const createCoSupervisor = async (req, res) => {

    const coSupervisors = req.body;
    

    const newCoSupervisors = new CoSupervisor({ ...coSupervisors, creator: req.userId })

    try {
        await newCoSupervisors.save();

        res.status(201).json(newCoSupervisors );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




module.exports ={createCoSupervisor ,updateCoSupervisorByID ,getAllCoSupervisorRequest};



