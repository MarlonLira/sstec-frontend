const INITIAL_STATE = { summary: { credit: 0, debit: 0, goal: 0 } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DASHBOARD_SUMMARY_FETCHED': {
      return { ...state, summary: action.payload.data }
    }
    default: {
      return state;
    }
  }
}