import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import { ReturnIfValid, GetDateNow } from '../common/functions/properties';
import Consts from '../consts';
import { replaceCode } from '../../src/common/functions/replace'

const BASE_URL = Consts.API_URL;
const CURRENT_DATE = GetDateNow().FullDate;
const INITIAL_VALUES = {};

const COMPANY_ID = localStorage.getItem('_sp_company') == null ? 0 : JSON.parse(localStorage.getItem('_sp_company')).id;
const PARKING_ID = localStorage.getItem('_sp_parking') == null ? 0 : JSON.parse(localStorage.getItem('_sp_parking')).id;

let registryCodeEmployee;
let phoneEmployee;
let passwordEmployee;
let data;

export function getList() {
  return new Promise((resolve) => {
    const route = PARKING_ID <= 0 ? `${BASE_URL}/employees/companyid/${COMPANY_ID}` : `${BASE_URL}/employees/parkingid/${PARKING_ID}`;
    console.log(route)
    axios.get(route)
      .then(request => {
        showCreate();
        resolve({
          type: 'EMPLOYEE_FETCHED',
          payload: request.data.result
        });
      }).catch(error => {
        console.log(error)
      })
  });
}

export function create(values) {
  return validateForm(values, 'create');
}

export function update(values) {
  return validateForm(values, 'update');
}

export function destroy(values) {
  return submit(values, 'delete');
}

function submit(values, method) {
  console.log(values)
  return new Promise((resolve) => {
    const id = (method == 'delete' || method == 'get') ? ReturnIfValid(values.id, '') : '';
    axios[method](`${BASE_URL}/employee/${id}`, values)
      .then(request => {
        toastr.success('Sucesso', 'Operacao realizada com sucesso.');
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

export function showUpdate(employee) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('employeeForm', employee)
    ]);
  })
}

export function showDelete(employee) {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabDelete'),
      selectTab('tabDelete'),
      initialize('employeeForm', employee)
    ]);
  })
}

export function showCreate() {
  return new Promise((resolve) => {
    resolve([
      initialize('employeeForm', INITIAL_VALUES)
    ]);
  })
}

export function init() {
  return new Promise((resolve) => {
    resolve([
      showTabs('tabList', 'tabCreate'),
      selectTab('tabList'),
      getList(),
      initialize('employeeForm', INITIAL_VALUES)
    ]);
  });
}

function validateForm(values, method) {
  return new Promise(resolve => {
    registryCodeEmployee = values.registryCode.replace(/[^\d]+/g, '');
    phoneEmployee = values.phone.replace(/[^\d]+/g, '');

    if (registryCodeEmployee.length < 11) {
      toastr.error('Erro', 'O CPF deve conter 11 digitos.');
      resolve({
        type: 'ERROR'
      })
    } else if (phoneEmployee.length < 11) {
      toastr.error('Erro', 'O Telefone deve conter 11 digitos: (xx) x xxxx-xxxx.');
      resolve({
        type: 'ERROR'
      })
    } else if (method == 'update') {
      if (values.passwordEmployee) {
        if (values.confirmPassword) {
          passwordEmployee = values.passwordEmployee;
          if (passwordEmployee.length >= 6) {
            if (passwordEmployee == values.confirmPassword) {
              data = {
                "employee": {
                  id: values.id,
                  name: values.name,
                  email: values.email,
                  registryCode: registryCodeEmployee,
                  phone: phoneEmployee,
                  password: passwordEmployee,
                  confirmPassword: values.confirmPassword
                }
              }
              resolve([
                submit(data, 'put')
              ]);
            } else {
              toastr.error('Erro', 'As senhas não coincidem.');
              resolve({
                type: 'ERROR'
              })
            }
          } else {
            toastr.error('Erro', 'A senha deve conter, no mínimo, 6 dígitos.');
            resolve({
              type: 'ERROR'
            })
          }
        } else {
          toastr.error('Erro', 'Preencha os campos obrigatórios');
          resolve({
            type: 'ERROR'
          })
        }
      } else {
        data = {
          "employee": {
            id: values.id,
            name: values.name,
            email: values.email,
            registryCode: registryCodeEmployee,
            phone: phoneEmployee
          }
        }
        resolve([
          submit(data, 'put')
        ]);
      }

    } else {
      passwordEmployee = values.passwordEmployee;

      if (passwordEmployee.length < 6) {
        toastr.error('Erro', 'A senha deve conter, no mínimo, 6 dígitos.');
        resolve({
          type: 'ERROR'
        })
      } else if (passwordEmployee != values.confirmPassword) {
        toastr.error('Erro', 'As senhas não coincidem.');
        resolve({
          type: 'ERROR'
        })
      } else {
        data = {
          "employee": {
            name: values.name,
            email: values.email,
            registryCode: registryCodeEmployee,
            phone: phoneEmployee,
            password: passwordEmployee,
            confirmPassword: values.confirmPassword,
            companyId: COMPANY_ID
          }
        }
        resolve([
          submit(data, 'post')
        ]
        );
      }
    }
  });
}