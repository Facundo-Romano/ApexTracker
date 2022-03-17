const { Router } = require("express");
const router = Router();
const userControllers = require("../userControllers/index.js");

router.get("/get/:id", userControllers.get);
router.get("/remove/:id", userControllers.remove);
router.post("/register", userControllers.register);
router.put("/mainUpdate", userControllers.mainUpdate);
router.put("/passwordUpdate", userControllers.passwordUpdate);
router.put("/pointsUpdate", userControllers.pointsUpdate);

module.exports = router;