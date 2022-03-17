const { Router } = require("express");
const router = Router();
const userControllers = require("../userControllers/index.js");

router.get("/get", userControllers.get);
router.get("/remove", userControllers.remove);
router.post("/register", userControllers.register);
router.put("/update", userControllers.update);

module.exports = router;