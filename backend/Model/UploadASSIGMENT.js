const mongoose = require("mongoose");

const fileAssigmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    AssignmentType: { type: String, required: true },
    Assignment: { type: String, required: true },
    img: { type: String, required: true },
    status:{type:String, default:'pending evaluate'},

   

});

module.exports = mongoose.model("fileAssigment", fileAssigmentSchema)