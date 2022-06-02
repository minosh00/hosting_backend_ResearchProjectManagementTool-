const mongoose = require("mongoose");

const RequestCosupervisorSchema = mongoose.Schema({

    GroupID:{type:String, required:true},
    GruopLeaderEmail:{type:String , required:true},
    CosupervisorID:{type:String, required:true},
    status:{type:String,  default:null},
},{
    timestamps:true,
}) 

const RequestCosupervisorModel = mongoose.model('RequestCosupervisorS' , RequestCosupervisorSchema)

module.exports = RequestCosupervisorModel