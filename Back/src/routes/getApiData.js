const { Router } = require("express");
const router = Router();
const getApiData = require("../ApexLegendsApi/getApiData.js");

router.post("/getApiData", getApiData);

module.exports = router;