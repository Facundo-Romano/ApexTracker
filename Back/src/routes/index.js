const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRoutes = require("./userRoutes.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user",  userRoutes);

module.exports = router;
