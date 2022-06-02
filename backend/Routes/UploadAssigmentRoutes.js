const router = require("express").Router();
const UploadFile = require('../Model/UploadASSIGMENT');

const {getevaluvtAssigmentById,updateAssigment} = require("../Controllers/EvaluateAssigmntController");


// Create upload
router.post("/assigment", async (req, res) => {
    try {
        const UploadFiles1 = await UploadFile(req.body).save();
        res.status(201).send({data: UploadFiles1, message: " created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})



//get all pdf documents

router.get("/downloadAssigmenntStudnts", async (req, res) => {
    try {
        const UploadFiles1 = await UploadFile.find();
        res.status(200).send({data: UploadFiles1})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})



router.get("/getevaluvtAssigmentById/:id",getevaluvtAssigmentById);

router.get("/updateAssigment/:id",updateAssigment);





module.exports = router;