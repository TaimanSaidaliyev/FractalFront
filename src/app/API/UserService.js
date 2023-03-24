import axios from 'axios';
import {BACK_HOST} from './APISettings'


export default class UserService {
    static async getUserInfo(id) {
        const response = await axios.get(BACK_HOST + `/api/profile/${id}/`)
        return response
    }

    static async getUserShortInfo(id) {
        const response = await axios.get(BACK_HOST + `/api/profile/short/${id}/`)
        return response
    }

    static async getCurrentUserInfo() {
        const response = await axios.get(BACK_HOST + `/api/profile/`)
        return response
    }

    static async getCompanyByUser() {
        const response = await axios.get(BACK_HOST + `/api/auth/company`)
        return response
    }
    
}
