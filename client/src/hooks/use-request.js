import axios from 'axios'

import { useState } from 'react'

const useRequest = ({ url, method, body }) => {
    const [errors, setErrors] = useState(null);
    const doRequest = async () => {
        try {
            const response = await axios[method](url, body);
            return response.data
        } catch(err) {
            setErrors(
                <h1>Error</h1>
            )
        }
    }
    return { doRequest, errors };
}

export default useRequest