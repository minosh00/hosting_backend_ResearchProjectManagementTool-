const mongoose = require("mongoose");

const RequestsupervisorSchema = mongoose.Schema({

    GroupID:{type:String, required:true},
    GruopLeaderEmail:{type:String , required:true},
    supervisorID:{type:String, required:true},
    status:{type:String , default:null},
},{
    timestamps:true,
}) 

const RequestsupervisorModel = mongoose.model('Requestsupervisor' , RequestsupervisorSchema)

module.exports = RequestsupervisorModel