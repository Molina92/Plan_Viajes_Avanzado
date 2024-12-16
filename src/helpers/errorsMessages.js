module.exports = {

    Trip_Delete_Not_Found: {
        id: 'viajeNoEncontrado',
        statusCode: 404,
        message: 'Viaje no encontrado',
        description: 'El viaje que desea eliminar con el ID asignado no fue encontrado en la base de datos'
    },

    Trip_Update_Not_Found: {
        id: 'viajeNoEncontrado',
        statusCode: 404,
        message: 'Viaje no encontrado',
        description: 'El viaje que desea actualizar con el ID asignado no fue encontrado en la base de datos'
    },

    Server_Error: {
        id: 'serverError',
        statusCode: 500,
        message: 'Error interno del servidor',
        description: 'Hubo un error interno del servidor, prueba más tarde'
    }

}