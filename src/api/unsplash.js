import axios from 'axios';

//The create method is going to create an instance of the axios client with defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID authorization'
    }
});