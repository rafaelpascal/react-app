import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-826d1.cloudfunctions.net/api' 
    //'http://localhost:5001/clone-826d1/us-central1/api'
});

export default instance; 