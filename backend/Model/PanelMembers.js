const mongoose = require("mongoose");

const pannelmemberSchema = mongoose.Schema({

    GroupID:{type:String, required:true},
    GruopLeaderEmail:{type:String , required:true},
    MembersItNumbers:{type:String, required:true},
    GruopLeaderItNumber:{type:String, required:true},
    status:{type:String, required:true , default:'Not Added Yet'},
},{
    timestamps:true,
}) 

const pannelmemberModel=mongoose.model('pannelmember' , pannelmemberSchema)

module.exports = pannelmemberModel