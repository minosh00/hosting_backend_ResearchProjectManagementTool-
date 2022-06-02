const express = require("express");
const router = express.Router();

const {createTopicRequest ,updateTopicRequestByID ,getAllTopicRequest,getTopicById,SendEmailByid , getAlltopiclist} = require("../Controllers/TopicRegisterControllers");


router.post("/createTopicRequest",createTopicRequest);
router.get("/getAllTopicRequest/:id",getAllTopicRequest);
router.patch("/updateTopicRequestByID/:id",updateTopicRequestByID);
router.get("/getTopicById/:id",getTopicById);
router.patch("/SendEmailByid/:id",SendEmailByid);

router.get("/getAlltopiclist/",getAlltopiclist);







module.exports = router;