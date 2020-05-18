import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = { "date": CURRENT_DATE };

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/rules`)
      .then(request => {
        showCreate();
        resolve({
          type: 'RULE_FETCHED',
          payload: request.data.result
        });
      });
  });
}


export function create(values) {
  var _values = { "rule": values };
  return submit(_values, 'post');
}

export function update(values) {
  var _values = { "rule": values };
  return submit(_values, 'put');
}

export function destroy(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/rule/${id}`, values)
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

export function showUpdate(rule) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('ruleForm', rule)
    ]);
  })
}
export function showDelete(rule) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('ruleForm', rule)
    ]);
  })
}

export function showCreate() {
  return new Promise((resolve) => {
    resolve([
      initialize('ruleForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('ruleForm', INITIAL_VALUES)
    ]);
  })
}