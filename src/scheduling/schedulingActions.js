import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/schedulings/${COMPANY_ID}`)
      .then(request => {
        resolve({
          type: 'SCHEDULING_FETCHED',
          payload: request.data.result
        });
      });
  });
}