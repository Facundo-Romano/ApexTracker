const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRoutes = require("./userRoutes.js");
const getApiData = require("./getApiData.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user",  userRoutes);
router.use("/api", getApiData);

module.exports = router;
