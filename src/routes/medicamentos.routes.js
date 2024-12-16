const { Router } = require('express')
const router = Router()

const { getAllMedicamentos } = require('../controllers/medicamentos.controller')

router.get("/", getAllMedicamentos)


// router.post("/", handleCreateViaje)

// router.put("/:id", handleModificarViaje)
// router.delete("/:id", handleEliminarViaje)

module.exports = router;