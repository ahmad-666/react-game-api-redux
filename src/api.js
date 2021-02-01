import { getYear, getMonth, getDay } from './utils/date';

const upcomingGamesConfig = {
  size: 15,
  sort: '-added',
  startDate: `${getYear()}-${getMonth()}-${getDay()}`,
  endDate: `${getYear() + 2}-${getMonth()}-${getDay()}`,
};
const newGamesConfig = {
  size: 15,
  sort: '-rating',
  startDate: `${getYear() - 1}-${getMonth()}-${getDay()}`,
  endDate: `${getYear()}-${getMonth()}-${getDay()}`,
};
const popularGamesConfig = {
  size: 15,
  sort: '-rating',
  startDate: `${getYear() - 2}-${getMonth()}-${getDay()}`,
  endDate: `${getYear()}-${getMonth()}-${getDay()}`,
};

export const UPCOMING_GAMES_URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=${upcomingGamesConfig.startDate},${upcomingGamesConfig.endDate}&page_size=${upcomingGamesConfig.size}&ordering=${upcomingGamesConfig.sort}`;
export const NEW_GAMES_URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=${newGamesConfig.startDate},${newGamesConfig.endDate}&page_size=${newGamesConfig.size}&ordering=${newGamesConfig.sort}`;
export const POPULAR_GAMES_URL = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=${popularGamesConfig.startDate},${popularGamesConfig.endDate}&page_size=${popularGamesConfig.size}&ordering=${popularGamesConfig.sort}`;
export const ACTIVE_GAME_URL = id =>
  `${process.env.REACT_APP_API_URL}/games/${id}?key=${process.env.REACT_APP_API_KEY}`;
export const ACTIVE_GAME_SCREENSHOTS = id =>
  `${process.env.REACT_APP_API_URL}/games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
