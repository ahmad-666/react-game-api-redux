import axios from 'axios';
import {
  POPULAR_GAMES_URL,
  UPCOMING_GAMES_URL,
  NEW_GAMES_URL,
  ACTIVE_GAME_URL,
  ACTIVE_GAME_SCREENSHOTS,
  SEARCH_GAME_URL,
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
export const fetchActiveGame = id => async dispatch => {
  dispatch({
    type: actionTypes.FETCH_ACTIVE_GAME_START,
  });
  try {
    const activeGameRes = await axios(ACTIVE_GAME_URL(id));
    const activeGameShotsRes = await axios(ACTIVE_GAME_SCREENSHOTS(id));
    dispatch({
      type: actionTypes.FETCH_ACTIVE_GAME_FINISH,
      activeGame: activeGameRes.data,
      shots: activeGameShotsRes.data.results,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_ACTIVE_GAME_FAILED,
    });
  }
};
export const fetchSearchGames = searchVal => async dispatch => {
  dispatch({ type: actionTypes.FETCH_SEARCH_GAME_START });
  try {
    const searchRes = await axios(SEARCH_GAME_URL(searchVal));
    dispatch({
      type: actionTypes.FETCH_SEARCH_GAMES_FINISH,
      searchGames: searchRes.data.results,
    });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_SEARCH_GAME_FAILED });
  }
};
