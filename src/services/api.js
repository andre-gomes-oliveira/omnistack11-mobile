import axios from 'axios';
import { NativeModules } from 'react-native';

const api = axios.create({
    baseURL: 'http://201.46.19.174:3333'
})

export default api;