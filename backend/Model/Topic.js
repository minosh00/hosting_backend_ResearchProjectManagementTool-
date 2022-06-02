const mongoose = require("mongoose");

const topicSchemaa = mongoose.Schema({

    GroupID:{type:String, required:true},
    TopicName:{type:String, required:true},
    GruopLeaderEmail:{type:String , required:true},
    supervisorID:{type:String , required:true},
    GruopMembersItNumbers:{type:String, required:true},
    GruopLeaderItNumber:{type:String, required:true},
    GruopMembersNames:{type:String, required:true},
    Urls:{type:String, required:true},
    Message:{type:String, required:true, default:'pending'},
    status:{type:String, required:true , default:'pending'},
},{
    timestamps:true,
}) 

const topicModels=mongoose.model('TopicRequest' , topicSchemaa)

module.exports = topicModels