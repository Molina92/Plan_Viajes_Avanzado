const { Router } = require('express')
const router = Router()

const { getAllPersonal } = require('../controllers/personal.controller')

router.get("/", getAllPersonal)


// router.post("/", handleCreateViaje)

// router.put("/:id", handleModificarViaje)
// router.delete("/:id", handleEliminarViaje)

module.exports = router;