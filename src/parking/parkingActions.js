import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';
import { CleanMask, Mask } from '../common/functions/mask';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/parkings/companyId/${COMPANY_ID}`)
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
  var _values = {};
  values.companyId = COMPANY_ID;

  _values = {
    "parking": {
      companyId: values.companyId,
      email: values.email,
      imgUrl: values.imgUrl,
      name: values.name,
      phone: CleanMask(values.phone, Mask.PHONE),
      registryCode: CleanMask(values.registryCode, Mask.USER_REGISTRY_CODE)
    }
  }

  return submit(_values, 'post');
}

export function update(values) {
  var _values = {
    "parking": {
      id: values.id,
      companyId: values.companyId,
      email: values.email,
      imgUrl: values.imgUrl,
      name: values.name,
      phone: CleanMask(values.phone, Mask.PHONE),
      registryCode: CleanMask(values.registryCode, Mask.COMPANY_REGISTRY_CODE)
    }
  }
  return submit(_values, 'put');
}

export function destroy(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/parking/${id}`, values)
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

export function showUpdate(parking) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('parkingForm', parking)
    ]);
  });
}

export function showDelete(parking) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('parkingForm', parking)
    ]);
  });
}

export function showCreate() {
  return new Promise((resolve) => {
    resolve([
      initialize('parkingForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('parkingForm', INITIAL_VALUES)
    ]);
  });
}

