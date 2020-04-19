import axios from 'axios';
import configJSON from '../../instance/config.json';

export default class AdvertisementsService {
  static url = configJSON.brokerURL + 'advertisement';

  static getAll() {
    return axios.get(AdvertisementsService.url, {});
  }
  static getByOwner(owner) {
    return axios.get(AdvertisementsService.url + `?owner=${owner}`, {});
  }
  static create(newAdvertisement) {
    return axios.post(AdvertisementsService.url, newAdvertisement);
  }
}
