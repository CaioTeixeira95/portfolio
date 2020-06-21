import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-portfolio-fatec.herokuapp.com'
});

export default api;