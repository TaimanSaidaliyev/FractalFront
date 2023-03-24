import axios from 'axios';
import {BACK_HOST} from './APISettings'

export default class ProjectManagementService {

    static async getTasksByProject(id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/tasks_list_by_project/${id}/`)
        return response
    }

    static async getTaskById(project_id, task_id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/${project_id}/task/${task_id}/`)
        return response
    }

    static async deleteTaskById(project_id, task_id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/${project_id}/task/${task_id}/`)
        return response
    }

    static async getProjectInformationById(project_id){
        const response = await axios.get(BACK_HOST + `/api/project_management/project_information/${project_id}/`)
        return response
    }

    static async getTimeTrackingListById(project_id, task_id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/${project_id}/task/${task_id}/timetracking/`)
        return response
    }

    static async addTimeTracking(project_id, task_id, body) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/${project_id}/task/${task_id}/timetracking/`, body)
        return response
    }

    static async deleteTimeTracking(timetracking_id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/timetracking/${timetracking_id}/delete/`)
        return response
    }

    static async getTaskAddParameters(project_id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/${project_id}/task_add/`)
        return response
    }

    static async setTaskAdd(project_id, body) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/${project_id}/task_add/`, body)
        return response
    }

    static async setTaskPut(task_id, body) {
        const response = await axios.put(BACK_HOST + `/api/project_management/project/1/task/${task_id}/`, body)
        return response
    }

    static async getAccessSkillStatus() {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/access/`)
        return response
    }

    static async getQuestions() {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/questions/`)
        return response
    }
}