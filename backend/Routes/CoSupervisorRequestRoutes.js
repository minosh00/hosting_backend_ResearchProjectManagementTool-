const express = require("express");
const router = express.Router();

const {createCoSupervisor ,updateCoSupervisorByID ,getAllCoSupervisorRequest} = require("../Controllers/RequestCoSupervisor");


router.post("/createCoSupervisor",createCoSupervisor);
router.get("/getAllCoSupervisorRequest/:id",getAllCoSupervisorRequest);
router.patch("/updateCoSupervisorByID/:id",updateCoSupervisorByID);


module.exports = router;