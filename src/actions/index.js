import tracks from '../apis/tracks';
import { FETCH_TRACKS } from './types';

export const fetchTracks = () => async dispatch => {
  const response = await tracks.get('/tracks.json');

  dispatch({ type: FETCH_TRACKS, payload: response.data });
};

//export const fetchTrack = id => async dispatch => {
  //const response = await tracks.get(`/tracks.json/${id}`);

  //dispatch({ type: FETCH_TRACK, payload: response.data });
//};
