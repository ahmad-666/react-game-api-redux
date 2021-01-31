import axios from 'axios';
import {
  POPULAR_GAMES_URL,
  UPCOMING_GAMES_URL,
  NEW_GAMES_URL,
} from '../../api';
import * as actionTypes from '.';

export const fetchPopularGames = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_POPULAR_GAMES_START,
  });
  try {
    const popularRes = await axios(POPULAR_GAMES_URL);
    dispatch({
      type: actionTypes.FETCH_POPULAR_GAMES_FINISH,
      popularGames: popularRes.data.results,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_POPULAR_GAMES_FAILED,
    });
  }
};
export const fetchNewGames = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_NEW_GAMES_START,
  });
  try {
    const newRes = await axios(NEW_GAMES_URL);
    dispatch({
      type: actionTypes.FETCH_NEW_GAMES_FINISH,
      newGames: newRes.data.results,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_NEW_GAMES_FAILED,
    });
  }
};
export const fetchUpcomingGames = () => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_UPCOMING_GAMES_START,
  });
  try {
    const upcomingRes = await axios(UPCOMING_GAMES_URL);
    dispatch({
      type: actionTypes.FETCH_UPCOMING_GAMES_FINISH,
      upcomingGames: upcomingRes.data.results,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_UPCOMING_GAMES_FAILED,
    });
  }
};
