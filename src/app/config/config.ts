export const URL_SERVICIOS = 'http://localhost:3000/'; // de mi servidor Express

export const URL_SERVICIOS_API = 'http://172.16.4.229/ApiBodas/'; // servidor IIS

export const ENDPOINTS =  {
    hotel: {
        getHoteles: URL_SERVICIOS_API + 'Hoteles/getHoteles',
        getHotel: URL_SERVICIOS_API + 'Hoteles/getHotelById/',
        saveHotel: URL_SERVICIOS_API + 'Hoteles/saveHotel',
        updateHotel: URL_SERVICIOS_API + 'Hoteles/updateHotel/',
        deleteteHotel: URL_SERVICIOS_API + 'Hoteles/deleteHotel/'
    },
    agencia : {
        getAgencias: URL_SERVICIOS_API + 'Agencia/getAgencias',
        getAgencia: URL_SERVICIOS_API + 'Agencia/getAgenciaById/',
        saveAgencia: URL_SERVICIOS_API + 'Agencia/saveAgencia',
        updateAgencia: URL_SERVICIOS_API + 'Agencia/updateAgencia/',
        deleteAgencia: URL_SERVICIOS_API + 'Agencia/deleteAgencia/'
    },
    horario : {
        gethorarios: URL_SERVICIOS_API + 'Horarios/getHorarios',
        getHorario: URL_SERVICIOS_API + 'Horarios/getHorarioById/',
        saveHorario: URL_SERVICIOS_API + 'Horarios/saveHorario',
        updateHorario: URL_SERVICIOS_API + 'Horarios/updateHorario/',
        deleteHorario: URL_SERVICIOS_API + 'Horarios/deleteHorario/'
    }
};

export const ROLES = {
    roles: [
        {
            nombre: 'admin',
            descripcion: 'el de mas nivel'
        },
        {
            nombre: 'usuario',
            descripcion: 'rol basico'
        },
        {
            nombre: 'visitante',
            descripcion: 'rol basico 2'
        },
        {
            nombre: 'vendedor',
            descripcion: 'rol basico 3'
        }
    ]
}