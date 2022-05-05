import axios from 'axios'

//const baseUrl= 'https://fullstack2022osa3backend1.herokuapp.com/api/persons' //http://localhost:3001/api/persons
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteOne = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const api = {
    getAll,
    create,
    update,
    deleteOne
}

export default api