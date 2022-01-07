import { combineReducers } from 'redux';

import Common from './Common';
import Auth from './Auth';

export default history =>
  combineReducers({
    common: Common,
    auth: Auth,
  });
