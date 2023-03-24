import axios from 'axios';
import {BACK_HOST} from './APISettings'


// const getToken = 'Token ' + JSON.parse(localStorage['kt-auth-react-v']).auth_token
// console.log(getToken)
// let apiConfig = {
//     headers: {Authorization: getToken}
// }


export default class PostService {

    static async getNews3() {
        const response = await axios.get(BACK_HOST + '/api/news/')
        return response
    }

    static async getNewById(id) {
        const response = await axios.get(BACK_HOST + '/api/news/' + id)
        return response
    }

    static async setNewView(id) {
        const response = await axios.get(BACK_HOST + '/api/news/' + id + '/setview/')
        return response
    }

    static async getCommentsNewById(id) {
        const response = await axios.get(BACK_HOST + '/api/news/' + id + '/comments/')
        return response
    }

    static async deleteNewById(id) {
        const response = await axios.delete(BACK_HOST + '/api/news/' + id + '/delete/')
        return response
    }

    static async addNew(formData) {
        const response = await axios.post(BACK_HOST + '/api/news/add/', formData)
        return response
    }

    static async editNew(formData, id) {
        const response = await axios.put(BACK_HOST + '/api/news/' + id + '/update/', formData)
        return response
    }

    static async getAllNews(body) {
        const response = await axios.get(BACK_HOST + '/api/news/all/', body)
        return response
    }

    static async getCategories() {
        const response = await axios.get(BACK_HOST + '/api/news/categories/')
        return response
    }

    static async getNewByCategory(id) {
        const response = await axios.get(BACK_HOST + `/api/news/categories/${id}/`)
        return response
    }

    static async currentUser() {
        const response = await axios.get(BACK_HOST + `/who/`)
        return response
    }
}