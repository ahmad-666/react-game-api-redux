import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './home.module.scss';
import * as actionCreators from '../../store/actions/gameActions';
import GameCards from '../../components/gameCards/GameCards';
import Loader from '../../components/loader/Loader';
import GameDetail from '../gameDetail/GameDetail';

const Home = () => {
  const dispatch = useDispatch();
  const {
    isPopularLoading,
    isUpcomingLoading,
    isNewLoading,
    isPopularFailed,
    isUpcomingFailed,
    isNewFailed,
    popularGames,
    upcomingGames,
    newGames,
  } = useSelector(state => state.game);
  useEffect(() => {
    dispatch(actionCreators.fetchUpcomingGames());
    dispatch(actionCreators.fetchNewGames());
    dispatch(actionCreators.fetchPopularGames());
  }, []);
  return (
    <>
      <div className={styles.container}>
        {isUpcomingLoading ? (
          <Loader />
        ) : isUpcomingFailed ? (
          <p className={styles.error}> cant load upcoming games </p>
        ) : (
          <GameCards title='upcoming games' games={upcomingGames} />
        )}
        {isNewLoading ? (
          <Loader />
        ) : isNewFailed ? (
          <p className={styles.error}> cant load new games </p>
        ) : (
          <GameCards title='new games' games={newGames} />
        )}
        {isPopularLoading ? (
          <Loader />
        ) : isPopularFailed ? (
          <p className={styles.error}> cant load popular games </p>
        ) : (
          <GameCards title='popular games' games={popularGames} />
        )}
      </div>
    </>
  );
};
export default Home;
