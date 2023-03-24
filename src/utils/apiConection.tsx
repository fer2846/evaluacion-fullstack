import axios from "axios"

const apiConection = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {'Authorization': ''}
})


apiConection.interceptors.request.use(
    async config => {
        const user = JSON.parse(sessionStorage.getItem('user')+'')
        let token
        if(user){
            token = user.token
        }
        config.headers.Authorization = token
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default apiConection
