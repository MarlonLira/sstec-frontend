import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;
const PARKING_ID = localStorage.getItem('_sp_parking') == null ? 0 : JSON.parse(localStorage.getItem('_sp_parking')).id;

export function getList() {
  return new Promise((resolve) => {
    const route = PARKING_ID <= 0 ? `${BASE_URL}/schedulings/companyid/${COMPANY_ID}` : `${BASE_URL}/schedulings/parkingid/${PARKING_ID}`;
    axios.get(route)
      .then(request => {
        resolve({
          type: 'SCHEDULING_FETCHED',
          payload: request.data.result
        });
      });
  });
}

