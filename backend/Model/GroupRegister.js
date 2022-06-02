const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({

    
   
    GruopLeaderEmail:{type:String , required:true},

    GruopLeaderItNumber:{type:String , required:true},

    GruopMembersItNumbers:{type:String, required:true},

    GruopMembersNames:{type:String, required:true},

    GruopMembersEmail:{type:String, required:true},

    GruopMembersContectNumber:{type:String, required:true},

    pannelmemberName:{type:String, default:'not yet Added'},

    GroupID:{type:String , default:'pending'},
},{
    timestamps:true,
}) 

const GroupModel =mongoose.model('GruopRegister' , GroupSchema)

module.exports = GroupModel