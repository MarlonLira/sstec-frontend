import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../reducer/dashboardReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;