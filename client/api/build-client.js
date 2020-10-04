import axios from 'axios'

/**
 * Enable pod-to-pod communication in Kubernetes via ingress controller 
 */
const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        })
    } 

    return axios.create({
        baseURL: '/',
    })
}

export default buildClient;