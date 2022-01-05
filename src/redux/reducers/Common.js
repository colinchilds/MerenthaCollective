import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../../@jumbo/constants/ActionTypes';

const INIT_STATE = {
  initialURL: '/',
  error: '',
  message: '',
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return { ...state, error: '', message: '', loading: true };
    }
    case FETCH_SUCCESS: {
      return { ...state, error: '', loading: false, message: action.payload };
    }
    case FETCH_ERROR: {
      return { ...state, loading: false, message: '', error: action.payload };
    }
    default:
      return state;
  }
};
