const router = require("express").Router();
const UploadFile = require('../Model/FileTemplateUpload');


// Create upload
router.post("/templateUpload", async (req, res) => {
    try {
        const UploadFiles = await UploadFile(req.body).save();
        res.status(201).send({data: UploadFiles, message: " created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})



//get all pdf documents

router.get("/downloadTemplate", async (req, res) => {
    try {
        const UploadFiles = await UploadFile.find();
        res.status(200).send({data: UploadFiles})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})


module.exports = router;