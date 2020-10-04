import axios from 'axios'

// Serverside communication will hit over the FQDN via LB into ingress and clientside will hit over standard HTTP
const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        return axios.create({
            baseURL: process.env.hostName,
            headers: req.headers
        })
    } 
    return axios.create({
        baseURL: '/',
    })
}

export default buildClient;