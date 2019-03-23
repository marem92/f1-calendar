import _ from 'lodash';
import { FETCH_TRACKS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, ..._.mapKeys(action.payload, 'title') };
    default:
      return state;
  }
};
