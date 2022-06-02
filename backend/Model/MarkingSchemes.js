const mongoose = require("mongoose");

const MarkingSchema = new mongoose.Schema({
 assiginmentName:{
     type:String,
     required:true,
 },
 fullMarks:{
     type:String,
     required:true,
 },
 discription:{
     type:String,
     required:true,
 },

 MandoryPoints:{
     type:String,
     required:true,
 },

});

module.exports = Marking_Schemes=mongoose.model("MarkingSchemes",MarkingSchema)