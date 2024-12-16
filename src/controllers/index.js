const Viajes = require('../models/Viajes')

const handleCreateViaje = async (req, res, next) => {
    try {
        // RECIBE LA INFORMACION DEL CLIENTE CON EL REQUEST
        const { destino, presupuesto } = req.body

        // ENVIA DATOS AL MODELO
        const response = await Viajes.agregarViaje(destino, presupuesto)

        // RESPUESTA AL CLIENTE	
        res.status(200).json({
            msg: 'Viaje agregado con exito',
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const handleGetViajes = async (req, res, next) => {
    try {
        const response = await Viajes.obtenerViajes()
        res.status(200).json({
            msg: 'Viajes obtenidos con exito',
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const handleModificarViaje = async (req, res, next) => {
    try {
        const { id } = req.params

        const exists = await Viajes.exist(id)
        if (!exists) {
            throw new Error('Trip_Update_Not_Found')
        } 

        const { destino, presupuesto } = req.body
        const response = await Viajes.modificarViaje(id, destino, presupuesto)
        res.status(200).json({
            msg: 'Viaje modificado con exito',
            data: response
        })
    } catch (error) {
        next(error)
    }
}

const handleEliminarViaje = async (req, res, next) => {
    try {
        const { id } = req.params

        const exists = await Viajes.exist(id)
        if (!exists) {
            throw new Error('Trip_Delete_Not_Found')
        } 

        const response = await Viajes.eliminarViaje(id)
        res.status(200).json({
            msg: 'Viaje eliminado con exito',
            data: response
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    handleCreateViaje,
    handleGetViajes,
    handleModificarViaje,
    handleEliminarViaje
}