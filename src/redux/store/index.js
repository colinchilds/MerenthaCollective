import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import reducers from '../reducers';

const history = createBrowserHistory();
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(reducers(history), initialState, bindMiddleware([thunk]));
  return store;
}
export default configureStore;
export { history };
