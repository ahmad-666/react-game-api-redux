import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaystation,
  faXbox,
  faWindows,
  faAndroid,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons';
import { faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './gameDetail.module.scss';
import Loader from '../../components/loader/Loader';

const getIcon = name => {
  switch (true) {
    case name.toLowerCase().startsWith('playstation'):
      return faPlaystation;
    case name.toLowerCase().startsWith('xbox'):
      return faXbox;
    case name.toLowerCase().startsWith('pc'):
      return faWindows;
    case name.toLowerCase().startsWith('android'):
      return faAndroid;
    case name.toLowerCase().startsWith('ios'):
      return faAppStore;
    default:
      return faWindows;
  }
};
const getStars = score => {
  const stars = [];
  const integer = Math.floor(score);
  const floatingPoint = score - integer;
  for (let i = 0; i < integer; i++) {
    stars.push(
      <FontAwesomeIcon
        size='2x'
        color='royalblue'
        icon={faStar}
        className={styles.star}
      />
    );
  }
  if (floatingPoint >= 0.5)
    stars.push(
      <FontAwesomeIcon
        size='2x'
        color='royalblue'
        icon={faStarHalf}
        className={styles.star}
      />
    );
  return stars;
};

const GameDetail = () => {
  const blackFilterElm = useRef(null);
  const history = useHistory();
  const {
    activeGame,
    isActiveGameLoading,
    isActiveGameFailed,
    activeGameShots,
  } = useSelector(store => store.game);
  const blackFilterHandler = e => {
    const clickedElm = e.target;
    if (clickedElm === blackFilterElm.current) {
      document.body.classList.remove('disableScroll');
      history.push('/');
    }
  };
  return (
    <div
      className={styles.blackFilter}
      onClick={blackFilterHandler}
      ref={blackFilterElm}
    >
      <div className={styles.container}>
        {isActiveGameLoading ? (
          <Loader />
        ) : isActiveGameFailed ? (
          <p className={styles.error}> cannot fetch game </p>
        ) : (
          <>
            <div className={styles.title}>
              <div className={styles.infos}>
                <p className={styles.info}> {activeGame.name} </p>
                <p className={styles.info}> {activeGame.released} </p>
                <p className={styles.info}> {activeGame.rating} </p>
                <div className={styles.stars}>
                  {getStars(activeGame.rating)}
                </div>
              </div>
              <div className={styles.platforms}>
                {activeGame.platforms.map(platform => {
                  return (
                    <div key={platform.platform.id} className={styles.platform}>
                      <FontAwesomeIcon
                        size='2x'
                        className={styles.platformIcon}
                        icon={getIcon(platform.platform.name)}
                      />
                      <p className={styles.platformName}>
                        {platform.platform.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.cover}>
              <img
                className={styles.coverImg}
                src={activeGame.background_image}
                alt={activeGame.background_image}
              />
            </div>
            <div className={styles.desc}>
              <p className={styles.descContent}>
                {activeGame.description.replace(/(<.*>)/gim, '')}
              </p>
            </div>
            <div className={styles.shots}>
              {activeGameShots.map(activeGameShot => (
                <img
                  className={styles.shot}
                  key={activeGameShot.id}
                  src={activeGameShot.image}
                  alt={activeGameShot.image}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default GameDetail;
