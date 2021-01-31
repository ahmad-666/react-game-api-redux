import * as actionTypes from '../actions';

const initState = {
  isPopularLoading: false,
  isUpcomingLoading: false,
  isNewLoading: false,
  isPopularFailed: false,
  isUpcomingFailed: false,
  isNewFailed: false,
  popularGames: [],
  upcomingGames: [],
  newGames: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UPCOMING_GAMES_START:
      return {
        ...state,
        isUpcomingLoading: true,
        isUpcomingFailed: false,
      };
    case actionTypes.FETCH_UPCOMING_GAMES_FINISH:
      return {
        ...state,
        isUpcomingLoading: false,
        isUpcomingFailed: false,
        upcomingGames: action.upcomingGames,
      };
    case actionTypes.FETCH_UPCOMING_GAMES_FAILED:
      return {
        ...state,
        isUpcomingLoading: false,
        isUpcomingFailed: true,
      };
    case actionTypes.FETCH_NEW_GAMES_START:
      return {
        ...state,
        isNewLoading: true,
        isNewFailed: false,
      };
    case actionTypes.FETCH_NEW_GAMES_FINISH:
      return {
        ...state,
        isNewLoading: false,
        isNewFailed: false,
        newGames: action.newGames,
      };
    case actionTypes.FETCH_NEW_GAMES_FAILED:
      return {
        ...state,
        isNewLoading: false,
        isNewFailed: true,
      };
    case actionTypes.FETCH_POPULAR_GAMES_START:
      return {
        ...state,
        isPopularLoading: true,
        isPopularFailed: false,
      };
    case actionTypes.FETCH_POPULAR_GAMES_FINISH:
      return {
        ...state,
        isPopularLoading: false,
        isPopularFailed: false,
        popularGames: action.popularGames,
      };
    case actionTypes.FETCH_POPULAR_GAMES_FAILED:
      return {
        ...state,
        isPopularLoading: false,
        isPopularFailed: true,
      };
    default:
      console.error(`${action.type} is invalid and no proper case found`);
      return { ...state };
  }
};
export default gameReducer;
