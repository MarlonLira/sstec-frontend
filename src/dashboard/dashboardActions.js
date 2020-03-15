import axios from 'axios';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;

export function getSummary() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/dashboards`)
      .then(request => {
        resolve({
          type: 'DASHBOARD_SUMMARY_FETCHED',
          payload: request
        });
      });
  });
}