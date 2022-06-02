const express = require("express");
const router = express.Router();

const {createSupervicor ,updateSupervicorByID ,getAllSupervicorRequest , AllSupervicorRequestStatus} = require("../Controllers/RequestSupervisor");


router.post("/createSupervicor",createSupervicor);
router.get("/getAllSupervicorRequest/:id",getAllSupervicorRequest);
router.patch("/updateSupervicorByID/:id",updateSupervicorByID);
router.get("/AllSupervicorRequestStatus",AllSupervicorRequestStatus);




module.exports = router;