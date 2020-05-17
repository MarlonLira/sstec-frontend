import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;

export function getListSpace(parkingId) {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/parkingSpace/parkingId/${parkingId}`)
      .then(request => {
        showCreate();
        resolve({
          type: 'PARKING_SPACE_FETCHED',
          payload: request.data.result
        });
      });
  });
}

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/parkings/${COMPANY_ID}`)
      .then(request => {
        showCreate();
        resolve({
          type: 'PARKING_FETCHED',
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
  let _values
  _values = {
    "parkingSpace" : {
      id: values.id,
      idParking: values.parkingId
    }
  }
  return submit(_values, 'delete');
}

function submit(values, method) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.parkingSpace.id, '') : '';
    axios[method](`${BASE_URL}/parkingSpace/${id}`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        resolve(init(), getListSpace(values.parkingSpace.idParking));
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type: 'ERROR'
        });
      });
  });
}

export function showUpdate(parkingSpace) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('parkingSpaceForm', parkingSpace)
    ]);
  });
}

export function showDelete(parkingSpace) {
  return new Promise((resolve) => {
    resolve([
      destroy(parkingSpace)
    ]);
  });
}

export function showCreate() {
  return new Promise((resolve) => {
    resolve([
      initialize('parkingSpaceForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      initialize('parkingSpaceForm', INITIAL_VALUES)
    ]);
  });
}