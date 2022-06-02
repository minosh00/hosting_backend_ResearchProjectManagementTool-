
const mongoose = require('mongoose');
const Supervisor = require("../Model/SupervicorRequest");




const getAllSupervicorRequest = async (req, res) => { 
    let id = req.params;
    console.log("supervisorID",id.id);
    try {
        const Supervisors = await Supervisor.find({"supervisorID" : id.id});
                 
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const AllSupervicorRequestStatus = async (req, res) => { 
    try {
        const Supervisors = await Supervisor.find();
                 
        res.status(200).json(Supervisors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const updateSupervicorByID = async (req, res) => {

    const { id } = req.params;
    const {  GroupID, GruopLeaderEmail ,supervisorID,status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatedSupervisor = {  GroupID, GruopLeaderEmail ,supervisorID,status, _id:id};

    await Supervisor.findByIdAndUpdate(id, updatedSupervisor, { new: true });

    res.json(updatedSupervisor);
}




const createSupervicor = async (req, res) => {

    const Supervisors = req.body;
    

    const newSupervisors = new Supervisor({ ...Supervisors, creator: req.userId })

    try {
        await newSupervisors.save();

        res.status(201).json(newSupervisors );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




module.exports ={createSupervicor ,updateSupervicorByID ,getAllSupervicorRequest , AllSupervicorRequestStatus};
