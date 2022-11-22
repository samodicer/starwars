import Vue from 'vue'
import axios from 'axios'

const axiosConfig = {
    baseURL: 'https://swapi.dev/api/',
    timeout: 30000,
};

Vue.prototype.$axios = axios.create(axiosConfig)
