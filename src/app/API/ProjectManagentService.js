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

    static async getAllQuestions(skill_id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/questions_list/filter/${skill_id}`)
        return response
    }

    static async deleteQuestion(id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/skills/questions_list/${id}/`)
        return response
    }

    static async getQuestion(id) {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/questions_list/${id}/`)
        return response
    }

    static async postQuestion(id, body, questionRecommendation) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/skills/questions_list/filter/${id}/`, {title: body, recommendation: questionRecommendation})
        return response
    }

    static async postAnswer(id, body) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/skills/questions/answer/${id}/`, {title: body})
        return response
    }

    static async deleteAnswer(id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/skills/questions/answer/${id}/`)
        return response
    }

    static async getSkillList() {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/list/`)
        return response
    }

    static async deleteSkill(id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/skills/item/${id}/`)
        return response
    }

    static async setSkill(id, title) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/skills/item/position/${id}/`, {title: title})
        return response
    }

    static async getPositionList() {
        const response = await axios.get(BACK_HOST + `/api/project_management/project/skills/item/project_position/list/`)
        return response
    }

    static async deletePosition(position_id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/skills/item/project_position/${position_id}/`)
        return response
    }

    static async addPosition(project_id, title, access_lvl) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/skills/item/project_position/add/${project_id}/`, {title: title, access_lvl: access_lvl})
        return response
    }

    static async addSkillToPosition(position_id, skill_id) {
        const response = await axios.post(BACK_HOST + `/api/project_management/project/skills/item/project_position/${position_id}/${skill_id}/`)
        return response
    }

    static async deleteSkillToPosition(position_id, skill_id) {
        const response = await axios.delete(BACK_HOST + `/api/project_management/project/skills/item/project_position/${position_id}/${skill_id}/`)
        return response
    }
}