import axios from 'axios';
import {BACK_HOST} from './APISettings'


export default class CommonService {
    static async getCommentsByModuleRecord(module_id, record_id) {
        const response = await axios.get(BACK_HOST + `/api/common/comments/view/${module_id}/${record_id}/`)
        return response
    }

    static async addCommentsByModuleRecord(module_id, record_id, body) {
        const response = await axios.post(BACK_HOST + `/api/common/comments/view/${module_id}/${record_id}/`, body)
        return response
    }

    static async deleteCommentsById(id) {
        const response = await axios.delete(BACK_HOST + `/api/common/comments/delete/${id}/`)
        return response
    }

    static async editCommentsByModuleRecord(module_id, record_id, comment_id, body) {
        const response = await axios.put(BACK_HOST + `/api/common/comments/view/${module_id}/${record_id}/${comment_id}/`, body)
        return response
    }

    static async setPropertyByRecord(type_id, module_id, record_id) {
        const response = await axios.put(BACK_HOST + `/api/auth/propertybyuser/put/${type_id}/${module_id}/${record_id}/`)
        return response
    }

    static async getPropertyByRecord(type_id, module_id, record_id) {
        const response = await axios.get(BACK_HOST + `/api/auth/propertybyuser/get/${type_id}/${module_id}/${record_id}/`)
        return response
    }

    static async getFilesByRecordModule(module_id, record_id) {
        const response = await axios.get(BACK_HOST + `/api/common/files/view/${record_id}/${module_id}/`)
        return response
    }
}