const { DB } = require("../config/db")

const agregarViaje = async (destino, presupuesto) => {
    try {
        const SQLQuery = "INSERT INTO viajes values (DEFAULT, $1, $2) returning *"
        const SQLValues = [destino, presupuesto]

        // Hay que desestructurar el objeto result, de esta manera obtenemos el rowCount y rows
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)

        // Cada vez que el objeto desestructurado se va a usar o retornar hay que usar las llaves {}
        console.log('Viaje agregado!', { rowCount, rows })
        return { rowCount, rows }
    } catch (error) {
        throw error
    }
}

const obtenerViajes = async () => {
    try {
        const SQLQuery = "SELECT * FROM viajes"
        const { rowCount, rows } = await DB.query(SQLQuery)
        return { rowCount, rows }
    } catch (error) {
        throw error
    }
}

const modificarViaje = async (id, destino, presupuesto) => {
    try {
        const SQLQuery = "UPDATE viajes SET destino = $1, presupuesto = $2 WHERE id = $3 returning *"
        const SQLValues = [destino, presupuesto, id]
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)
        return { rowCount, rows }
    } catch (error) {
        throw error
    }
}

const eliminarViaje = async (id) => {
    try {
        const SQLQuery = "DELETE FROM viajes WHERE id = $1 returning *"
        const SQLValues = [id]
        const { rowCount, rows } = await DB.query(SQLQuery, SQLValues)
        return { rowCount, rows }
    } catch (error) {
        throw error
    }
}

const exist = async (id) => {
    try {
        
        const SQLQuery = "select * from viajes where id = $1"
        const SQLValues = [id]
        const { rowCount } = await DB.query(SQLQuery, SQLValues)
        return rowCount ? true : false

    } catch (error) {
        throw error
    }
}

module.exports = {
    agregarViaje,
    obtenerViajes,
    modificarViaje,
    eliminarViaje,
    exist
}