const INITIAL_STATE = { summary: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED': {
      return { ...state, summary: action.payload.data }
    }
    default: {
      return state;
    }
  }
}