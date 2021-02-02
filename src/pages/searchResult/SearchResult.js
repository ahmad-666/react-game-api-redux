import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './gameResult.module.scss';
import GameCards from '../../components/gameCards/GameCards';
import Loader from '../../components/loader/Loader';
import { fetchSearchGames } from '../../store/actions/gameActions';

const SearchResult = () => {
  const { searchGames, isSearchLoading, isSearchFailed } = useSelector(
    store => store.game
  );
  const { search } = useLocation();
  const searchVal = new URLSearchParams(search).get('q');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchGames(searchVal));
  }, [searchVal]);
  return (
    <>
      {isSearchLoading ? (
        <Loader />
      ) : isSearchFailed ? (
        <p className={styles.error}> something unexpected happens </p>
      ) : (
        <GameCards title='search result' games={searchGames} />
      )}
    </>
  );
};
export default SearchResult;
