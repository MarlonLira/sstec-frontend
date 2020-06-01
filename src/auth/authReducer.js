import { IsValid } from '../common/functions/properties';

const _employee = '_sp_employee';
const _employeeToken = '_sp_token_employee';
const _company = '_sp_company';
const _parking = '_sp_parking';
const _authenticationLevel = '_sp_parking';

const INITIAL_STATE = {
  validToken: false,
  authenticationLevel: JSON.parse(localStorage.getItem(_authenticationLevel)),
  employee: JSON.parse(localStorage.getItem(_employee)),
  company: JSON.parse(localStorage.getItem(_company)),
  parking: JSON.parse(localStorage.getItem(_parking)),
  token: JSON.parse(localStorage.getItem(_employeeToken))
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED': {
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(_employee);
        localStorage.removeItem(_company);
        localStorage.removeItem(_parking);
        localStorage.removeItem(_employeeToken);
        return { ...state, validToken: false, employee: null, company: null, parking: null, token: null, authenticationLevel: null }
      }
    }
    case 'USER_FETCHED': {
      localStorage.setItem(_employee, JSON.stringify(action.payload.employee));
      localStorage.setItem(_company, JSON.stringify(action.payload.company));
      localStorage.setItem(_parking, IsValid(action.payload.parking) ? JSON.stringify(action.payload.parking) : JSON.stringify({ id: 0 }));
      localStorage.setItem(_authenticationLevel, IsValid(action.payload.authenticationLevel) ? JSON.stringify(action.payload.authenticationLevel) : 0);
      localStorage.setItem(_employeeToken, JSON.stringify(action.payload.token));
      console.log('--------------')
      console.log(action.payload.authenticationLevel);
      console.log('--------------')
      return {
        ...state, employee: action.payload.employee, company: action.payload.company,
        parking: action.payload.parking, token: action.payload.token,
        validToken: action.payload.validated, authenticationLevel: action.payload.authenticationLevel
      }
    }

    default: {
      return state;
    }
  }
}