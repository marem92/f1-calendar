import _ from 'lodash';
import { FETCH_TRACKS, FETCH_TRACK } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRACK:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TRACKS:
      return { ...state, ..._.mapKeys(action.payload, 'title') };
    default:
      return state;
  }
};
