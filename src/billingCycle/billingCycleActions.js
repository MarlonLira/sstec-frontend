import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const INITIAL_VALUES = {};

export function getList() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/billingCycles`)
      .then(request => {
        resolve({
          type: 'BILLING_CYCLES_FETCHED',
          payload: request
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
  return new Promise((resolve, reject) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/billingCycle/${id}`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        resolve(init());
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type: 'ERROR'
        })
      })
  })
}

export function showUpdate(billingCycle) {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('billingCycleForm', billingCycle)
    ]);
  })
}
export function showDelete(billingCycle) {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('billingCycleForm', billingCycle)
    ]);
  })
}

export function init() {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('billingCycleForm', INITIAL_VALUES)
    ]);
  })
}