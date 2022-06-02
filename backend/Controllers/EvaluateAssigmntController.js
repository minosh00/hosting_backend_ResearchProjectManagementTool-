
const mongoose = require('mongoose');
const Groups = require("../Model/UploadASSIGMENT");


const updateAssigment = async (req, res) => {
    const { id } = req.params;
    const {  name ,AssignmentType , Assignment ,status ,img} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedGroups = {  name ,AssignmentType , Assignment ,status ,img,_id:id};

    await Groups.findByIdAndUpdate(id, updatedGroups, { new: true });

    res.json(updatedGroups);
}




const getevaluvtAssigmentById = async (req, res) => { 
    const { id } = req.params;

    try {
        const groups = await Groups.findById(id);
        
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={getevaluvtAssigmentById,updateAssigment };
