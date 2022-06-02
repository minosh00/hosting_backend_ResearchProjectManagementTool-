
const mongoose = require('mongoose');
const TopicRequest = require("../Model/Topic");



const getAllTopicRequest = async (req, res) => { 
    try {
        const TopicRequests = await TopicRequest.find();
                 
        res.status(200).json(TopicRequests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const updateTopicRequestByID = async (req, res) => {

    const { id } = req.params;
    const {  GroupID, TopicName ,GruopLeaderEmail,supervisorID,GruopMembersItNumbers,GruopLeaderItNumber,GruopMembersNames,Urls,status,Message} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatedtopic = { GroupID, TopicName ,GruopLeaderEmail,supervisorID,GruopMembersItNumbers,GruopLeaderItNumber,GruopMembersNames,Urls,status,Message, _id:id};

    await TopicRequest.findByIdAndUpdate(id, updatedtopic, { new: true });

    res.json(updatedtopic);
}




const createTopicRequest = async (req, res) => {

    const TopicRequests = req.body;
    

    const newTopicRequest = new TopicRequest({ ...TopicRequests, creator: req.userId })

    try {
        await newTopicRequest.save();

        res.status(201).json(newTopicRequest );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



const getTopicById = async (req, res) => { 
    const { id } = req.params;

    try {
        const TopicRequests = await TopicRequest.findById(id);
        
        res.status(200).json(TopicRequests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const SendEmailByid = async (req, res) => {

    const { id } = req.params;
    const {  GroupID, TopicName ,GruopLeaderEmail,supervisorID,GruopMembersItNumbers,GruopLeaderItNumber,GruopMembersNames,Urls,status,Message} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatedtopic = { GroupID, TopicName ,GruopLeaderEmail,supervisorID,GruopMembersItNumbers,GruopLeaderItNumber,GruopMembersNames,Urls,status,Message, _id:id};

    await TopicRequest.findByIdAndUpdate(id, updatedtopic, { new: true });

    res.json(updatedtopic);
}


const getAlltopiclist = async (req, res) => { 
    try {
        const TopicRequests = await TopicRequest.find();
                 
        res.status(200).json(TopicRequests);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}








module.exports ={createTopicRequest ,updateTopicRequestByID ,getAllTopicRequest, getTopicById ,SendEmailByid , getAlltopiclist};

