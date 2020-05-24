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
        toastr.info('Info', resp.data.message);
        if (type == 1) {
          _type = 'USER_SIGNUP'
        }
        console.log([
          {
            type: _type,
            payload: resp.data.result
          }
        ]);
        resolve([
          {
            type: _type,
            payload: resp.data.result
          }
        ])
      })
      .catch(error => {
        toastr.error('Error', error.response.data.message);
      });
  });
}

export function signin(values) {
  return new Promise((resolve) => {
    submit(values, `${consts.OAPI_URL}/employee/signin`, type.signin)
      .then(resp => {
        resolve(resp);
      });
  })
}

export function signup(values) {
  return new Promise((resolve) => {
    submit(values, `${consts.OAPI_URL}/employee/signup`, type.signup)
      .then(resp => {
        resolve(resp);
      });
  })
}

export function logout() {
  localStorage.clear();
  return ({ type: 'TOKEN_VALIDATED', payload: false })
};

export function validateToken(token) {
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