const INITIAL_STATE = { list: [], listAddress: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'COMPANY_FETCHED': {
      return { ...state, list: action.payload }
    } case 'COMPANY_ADDRESS_FETCHED': {
      return { ...state, listAddress: action.payload }
    } default: {
      return state;
    }
  }
}