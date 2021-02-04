import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
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
  const { pathname } = useLocation();
  const activeGameId = pathname.split('/')[2];
  return (
    <AnimateSharedLayout type='crossfade'>
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
      <AnimatePresence exitBeforeEnter>
        {activeGameId && (
          <GameDetail
            cardId={activeGameId.toString()}
            imgId={`img-${activeGameId}`}
            titleId={`title-${activeGameId}`}
            dateId={`date-${activeGameId}`}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};
export default Home;
