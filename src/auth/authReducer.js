const _employee = '_sp_employee';
const _employeeToken = '_sp_token_employee';
const _company = '_sp_company';
const INITIAL_STATE = {
  employee: JSON.parse(localStorage.getItem(_employee)),
  company: JSON.parse(localStorage.getItem(_company)),
  token: JSON.parse(localStorage.getItem(_employeeToken)),
  validToken: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED': {
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(_employee);
        localStorage.removeItem(_company);
        localStorage.removeItem(_employeeToken);
        return { ...state, validToken: false, employee: null, company: null, token: null }
      }
    }
    case 'USER_FETCHED': {
      localStorage.setItem(_employee, JSON.stringify(action.payload.employee));
      localStorage.setItem(_company, JSON.stringify(action.payload.company));
      localStorage.setItem(_employeeToken, JSON.stringify(action.payload.token));
      return { ...state, employee: action.payload.employee, company: action.payload.company, token: action.payload.token, validToken: true }
    }

    default: {
      return state;
    }
  }
}