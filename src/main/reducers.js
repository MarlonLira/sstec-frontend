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
import SchedulingReducer from '../scheduling/schedulingReducer';
import ParkingReducer from '../parking/parkingReducer';
import ParkingSpaceReducer from '../parkingSpace/parkingSpaceReducer';
import RuleReducer from '../rule/ruleReducer';
import CompanyReducer from '../company/companyReducer'


const rootReducer = combineReducers({
  form: formReducer,
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  product: ProductReducer,
  employee: EmployeeReducer,
  toastr: toastrReducer,
  select: SelectReducer,
  auth: AuthReducer,
  scheduling: SchedulingReducer,
  parking: ParkingReducer,
  parkingSpace: ParkingSpaceReducer,
  rule:RuleReducer,
  company: CompanyReducer
});

export default rootReducer;