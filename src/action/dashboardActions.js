import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from './tabActions';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
//const BASE_URL = 'http://localhost:4001';

export function getSummary() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/billingCycle/0`)
      .then(request => {
        resolve({
          type: 'BILLING_SUMMARY_FETCHED',
          payload: request
        });
      });
  });
}