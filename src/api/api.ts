import axios from "axios";


export const api = 'https://64044c6f3bdc59fa8f35e5c2.mockapi.io/task/?limit=10'

export const fetchTask = () => {
    return axios.get(api)
}