import axios from 'axios';
import configJSON from '../../instance/config.json';

export default class HttpService {
  static url = configJSON.backendURL;

  static get(path, data = {}) {
    return axios.get(HttpService.url + path, data);
  }

  static post(path, data = {}) {
    return axios.post(HttpService.url + path, data, {header: {
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers':"Origin, X-Requested-With, Content-Type, Accept, Authorization"
  }});
  }

  static put(path, data = {}) {
    return axios.put(HttpService.url + path, data);
  }

  static delete(path, data = {}) {
    return axios.delete(HttpService.url + path, data);
  }
}