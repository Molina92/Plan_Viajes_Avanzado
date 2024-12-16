const { DB } = require("../config/db")
const format = require('pg-format')

const obtenerPersonal = async ({ limit = 10, order_by = "salario_ASC", page = 1 }) => {
    try {

        const [campo, direccion] = order_by.split("_")
        const offset = Math.abs((page - 1) * limit)

        const SQLQuery = format(`
            SELECT * FROM personal
            order by %s %s 
            LIMIT %s
            OFFSET %s`, 
            campo, 
            direccion, 
            limit,
            offset
        );
        
        console.log(SQLQuery)

        const { rowCount, rows } = await DB.query(SQLQuery)
        const { rowCount: count } = await DB.query('SELECT * FROM personal')
        

        return {
            rows,
            rowCount,
            pages: Math.ceil(count / limit)
        }


    } catch (error) {
        throw error
    }
}

module.exports = {
    obtenerPersonal
}