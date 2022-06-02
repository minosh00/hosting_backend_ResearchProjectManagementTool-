const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    AssignmentType: { type: String, required: true },
    Assignment: { type: String, required: true },
    img: { type: String, required: true },
   

});

module.exports = mongoose.model("fileTemplateUpload", fileSchema)