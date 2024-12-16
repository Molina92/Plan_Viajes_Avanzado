const Personal = require('../models/Personal')

const getAllPersonal = async (req, res, next) => {
    try {
    
        const { limit, order_by, page } = req.query
        const response = await Personal.obtenerPersonal({ limit, order_by, page })

        res.status(200).json({
            msg: 'Personal obtenido con exito',
            data: response
        })
    
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPersonal
}