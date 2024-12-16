const { Router } = require('express')
const router = Router()

const { handleCreateViaje, handleGetViajes, handleModificarViaje, handleEliminarViaje } = require('../controllers/index')

router.post("/", handleCreateViaje)
router.get("/", handleGetViajes)

router.put("/:id", handleModificarViaje)
router.delete("/:id", handleEliminarViaje)

module.exports = router;