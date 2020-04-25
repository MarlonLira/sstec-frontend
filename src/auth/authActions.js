import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

const type = {
  signin: 0,
  signup: 1
};

function submit(values, url, type) {
  return new Promise((resolve, reject) => {
    axios.post(url, values)
      .then(resp => {
        let _type = 'USER_FETCHED';
        toastr.message('Info', resp.data.message);
        if (type == 1) {
          _type = 'USER_SIGNUP'
        }
        resolve([
          {
            type: _type,
            payload: resp.data.result
          }
        ])
      })
      .catch(error => {
        toastr.error('Error', error.response.data.message);
      })
  })
}

export const signin = values => submit(values, `${consts.OAPI_URL}/employee/signin`, type.signin);
//export const signup = values => submit(values, `${consts.OAPI_URL}/employee/signup`, type.signup);

export function signup(values) {
  return new Promise((resolve) => {
    submit(values, `${consts.OAPI_URL}/employee/signup`, type.signup)
      .then(resp => {
        resolve(resp);
      });
  })
}

export const logout = () => ({ type: 'TOKEN_VALIDATED', payload: false });

export const validateToken = token => {
  return new Promise((resolve) => {
    if (token) {
      axios.post(`${consts.OAPI_URL}/tokenValidate`, { token })
        .then(resp => {
          resolve([
            {
              type: 'TOKEN_VALIDATED',
              payload: resp.data.valid
            }
          ]);
        })
        .catch(e => {
          resolve([
            {
              type: 'TOKEN_VALIDATED',
              payload
            }
          ])
        })
    } else {
      resolve([
        {
          type: 'TOKEN_VALIDATED',
          payload
        }
      ]);
    }
  })
};