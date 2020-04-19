import axios from 'axios';
import configJSON from '../../instance/config.json';

export default class DiscountsService {
  static url = configJSON.brokerURL + 'discount';

  static getAll() {
    return axios.get(DiscountsService.url, {});
  }
  static getByOwner(owner) {
    return axios.get(DiscountsService.url + `?owner=${owner}`, {});
  }
  static create(newDiscount) {
    return axios.post(DiscountsService.url, newDiscount);
  }
}
