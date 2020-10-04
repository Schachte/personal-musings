import axios from 'axios'

const buildClient = ({req}) => {
    if (typeof window === 'undefined') {
        return axios.create({
            baseURL: process.env.hostName,
            headers: req.headers,
        })
    }
    return axios.create({
        baseURL: '/',
    })
}

export default buildClient
