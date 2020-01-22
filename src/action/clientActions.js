import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from './tabActions';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
//const BASE_URL = 'http://localhost:4001';
const INITIAL_VALUES = {};

export function getList() {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/clients`)
      .then(request => {
        showCreate()
        resolve({
          type: 'CLIENT_FETCHED',
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

export function remove(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return new Promise((resolve, reject) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/client/${id}`, values)
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

export function showUpdate(client) {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('clientForm', client)
    ]);
  })
}

export function showDelete(client) {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('clientForm', client)
    ]);
  })
}

export function showCreate() {
  return new Promise((resolve, reject) => {
    resolve([
      initialize('clientForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve, reject) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('clientForm', INITIAL_VALUES)
    ]);
  })
}