import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../reducer/dashboardReducer';
import TabReducer from '../reducer/tabReducer';
import ClientReducer from '../reducer/clientReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  client: ClientReducer,
  tab: TabReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;