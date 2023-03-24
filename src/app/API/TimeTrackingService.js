import axios from 'axios';
import {BACK_HOST} from './APISettings'

export default class TimeTrackingService {

    static async getTimeTrackingStatus() {
        const response = await axios.get(BACK_HOST + `/api/profile/timetracking/`)
        return response
    }

    static async setTimeTrackingStatus() {
        const response = await axios.post(BACK_HOST + `/api/profile/timetracking/`)
        return response
    }

    static async setTimeTrackingDescription(record_id, description) {
        const response = await axios.put(BACK_HOST + '/api/profile/timetracking/set_description/', {id: record_id, description: description})
        return response
    }

    static async getTimeTrackingList() {
        const response = await axios.get(BACK_HOST + `/api/profile/timetracking/list/`)
        return response
    }

    static async getTimeTrackingProperties() {
        const response = await axios.get(BACK_HOST + '/api/profile/timetracking/property/')
        return response
    }

    static async setTimeTrackingProperties(properties) {
        const response = await axios.put(BACK_HOST + '/api/profile/timetracking/property/', properties)
        return response
    }
}