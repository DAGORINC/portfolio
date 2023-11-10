import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://counter-7b61e-default-rtdb.europe-west1.firebasedatabase.app',
})

export default instance