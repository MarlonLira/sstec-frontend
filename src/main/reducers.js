import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import ProductReducer from '../product/productReducer';
import EmployeeReducer from '../employee/employeeReducer';
import SelectReducer from '../common/widget/select/selectReducer';
import AuthReducer from '../auth/authReducer';
import RequestReducer from '../request/requestReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  product: ProductReducer,
  employee: EmployeeReducer,
  form: formReducer,
  toastr: toastrReducer,
  select: SelectReducer,
  auth: AuthReducer,
  request: RequestReducer
});

export default rootReducer;