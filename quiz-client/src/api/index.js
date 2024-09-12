import axios from 'axios';

export const BASE_URL = 'http://localhost:5138/';

// used plural naming convention for the model endpoints
// e.g. `/Participants` not just `/Participant`
export const ENDPOINTS = {
    participant: 'Participant',
    question: 'Questions',
    getAnswers: 'Questions/getanswers'
}

// creates a consistent set of methods to interact with an endpoint of the quizAPI
export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        // each method makes an async request to the API endpoint
        // axios maps these to HTTP methods
        fetch: () => axios.get(url),
        fetchByID: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: id => axios.delete(url + id)
    };
}