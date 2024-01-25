import axios from "axios";

// main
export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}`

export const getMain = async () => {
    const res = await axios.get(`${prefix}/`)

    return res.data
}

// vehicle
export const getVehicleSchedule = async () => {

    const res = await axios.get(`${prefix}/api/vehicleSchedule`)

    return res.data
}
export default class groundTApi {
}