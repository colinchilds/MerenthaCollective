import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Common from './Common';
import Auth from './Auth';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    auth: Auth,
  });
