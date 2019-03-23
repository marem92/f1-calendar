import tracks from '../apis/tracks';
import { FETCH_TRACKS, FETCH_TRACK } from './types';

export const fetchTracks = () => async dispatch => {
  const response = await tracks.get('/tracks.json');

  dispatch({ type: FETCH_TRACKS, payload: response.data });
};

export const fetchTrack = id => async dispatch => {
  const response = await tracks.get(`/tracks/${id}`);

  dispatch({ type: FETCH_TRACK, payload: response.data });
};
