const { Router } = require("express");
const router = Router();
const matchControllers = require("../controllers/match/index.js");

router.get("/get/:id", matchControllers.get);
router.post("/create/:id", matchControllers.create);

module.exports = router;