import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';
import { replaceCode } from '../common/functions/replace'

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;
const CODE_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).registryCode;

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/company/registryCode/${CODE_ID}`)
      .then(request => {
        showCreate();
        resolve({
          type: 'COMPANY_FETCHED',
          payload: request.data.result
        });
      });
  });
}

export function create(values) {
  return submit(values, 'post');
}

export function update(values) {
  return submit(values, 'put');
}

export function destroy(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/company/${id}`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        resolve(init());
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type: 'ERROR'
        });
      });
  });
}

export function showUpdate(company) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('companyForm', company)
    ]);
  });
}

export function showDelete(company) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('companyForm', company)
    ]);
  });
}

export function showCreate() {
  return new Promise((resolve) => {
    resolve([
      initialize('companyForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('companyForm', INITIAL_VALUES)
    ]);
  });
}

