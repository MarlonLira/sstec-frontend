import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';
import { CleanMask, Mask } from '../common/functions/util';

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};
const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;

export function getList() {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/parkings/companyId/${COMPANY_ID}`)
      .then(request => {
        resolve({
          type: 'PARKING_FETCHED',
          payload: request.data.result
        });
      });
  });
}

export function getAddress(values) {
  return new Promise((resolve) => {
    axios.get(`${BASE_URL}/ParkingAdress/${values}`)
      .then(requestAddress => {
        resolve({
          type: 'PARKING_ADDRESS_FETCHED',
          payload: requestAddress.data.result
        });
      })
  })
}

export function create(values) {
  values.companyId = COMPANY_ID;
  var _values = {
    "parking": {
      companyId: values.companyId,
      email: values.email,
      imgUrl: values.imgUrl,
      name: values.name,
      phone: CleanMask(values.phone, Mask.PHONE),
      registryCode: CleanMask(values.registryCode, Mask.USER_REGISTRY_CODE)
    }
  }

  var _valueAddress = {
    "parkingAdress": {
      zipCode: values.zipCode,
      street: values.street,
      number: values.number,
      district: values.district,
      country: values.country,
      state: values.state,
      city: values.city,
      complement: values.complement,
      latitude: '000',
      longitude: '000'
    }
  }

  return submit(_values, 'post', _valueAddress);
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

  var _valueAddress = {
    "parkingAdress": {
      id: values.idAddress,
      zipCode: CleanMask(values.zipCode, Mask.ZIP_CODE),
      street: values.street,
      number: values.number,
      district: values.district,
      country: values.country,
      state: values.state,
      city: values.city,
      complement: values.complement,
      latitude: '000',
      longitude: '000'
    }
  }
  return submit(_values, 'put', _valueAddress);
}

export function destroy(values) {
  return submit(values, 'delete');
}

function submit(values, method, valuesAddress) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/parking/${id}`, values)
      .then(request => {
        if (valuesAddress) {
          valuesAddress.parkingAdress.parkingId = request.data.result.parkingId;
          resolve(submitAddress(valuesAddress, method));
        } else {
          resolve(submitAddress(values, method));
        }
      })
      .catch(error => {
        toastr.warning(error.message);
        resolve({
          type: 'ERROR'
        });
      });
  });
}

function submitAddress(values, method) {
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.idAddress, '') : '';
    axios[method](`${BASE_URL}/parkingAdress/${id}`, values)
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

