const { Router } = require("express");
const router = Router();
const userControllers = require("../controllers/user/index.js");

router.get("/get/:id", userControllers.get);
router.get("/remove/:id", userControllers.remove);
router.post("/create", userControllers.create);
router.put("/update/:id", userControllers.update);

module.exports = router;