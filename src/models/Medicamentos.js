const { DB } = require("../config/db")
const format = require('pg-format')

const obtenerMedicamentos = async ({ limit = 10, order_by = "id_ASC", page = 1 }) => {
    try {

        const [campo, direccion] = order_by.split("_")
        const offset = Math.abs((page - 1) * limit)

        const SQLQuery = format(`
            SELECT * FROM medicamentos
            order by %s %s 
            LIMIT %s
            OFFSET %s`, 
            campo, 
            direccion, 
            limit,
            offset

        );
        
        const { rows, rowCount } = await DB.query(SQLQuery)
        const { rowCount: count } = await DB.query('SELECT * FROM medicamentos')

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }


    } catch (error) {
        throw error
        console.log(error)
    }
}

module.exports = {
    obtenerMedicamentos
}