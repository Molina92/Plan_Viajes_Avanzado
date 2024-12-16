const Medicamentos = require('../models/Medicamentos')

const getAllMedicamentos = async (req, res, next) => {
    try {
    
        const { limit, order_by, page } = req.query
        const response = await Medicamentos.obtenerMedicamentos({ limit, order_by, page })

        res.status(200).json({
            msg: 'Medicamentos obtenidos con exito',
            data: response
        })
    
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllMedicamentos
}