import axios from "axios";
import {TaskProps} from "../interfaces/TaskInterface";

export const api = 'https://64044c6f3bdc59fa8f35e5c2.mockapi.io/task'
export const fetchTask = () => {
    return axios.get<any>(api)
}