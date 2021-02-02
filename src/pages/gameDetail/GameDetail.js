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
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './gameDetail.module.scss';
import Loader from '../../components/loader/Loader';
import { blackFilterAnimation } from '../../animation';

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
        key={i}
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
        key={4}
      />
    );
  return stars;
};

const GameDetail = ({ cardId, imgId, titleId, dateId }) => {
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
  let bgResize = null;
  if (!isActiveGameLoading) {
    const splits = activeGame.background_image.split('media/');
    bgResize = [splits[0], 'media/', 'resize/1280/-/', splits[1]].join('');
  }

  return (
    <motion.div
      className={styles.blackFilter}
      onClick={blackFilterHandler}
      ref={blackFilterElm}
      variants={blackFilterAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      layoutId={cardId.toString()}
    >
      <div className={styles.container}>
        {!isActiveGameLoading && (
          <>
            <div className={styles.title}>
              <div className={styles.infos}>
                <motion.p className={styles.info} layoutId={titleId}>
                  {activeGame.name}
                </motion.p>
                <motion.p className={styles.info} layoutId={dateId}>
                  {activeGame.released}
                </motion.p>
                <p className={styles.info}> {activeGame.rating} </p>
                <div className={styles.stars}>
                  {getStars(activeGame.rating)}
                </div>
              </div>
              <div className={styles.platforms}>
                {activeGame.platforms.map((platform, i) => {
                  return (
                    <div key={i} className={styles.platform}>
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
            <motion.div className={styles.cover} layoutId={imgId}>
              <img className={styles.coverImg} src={bgResize} alt={bgResize} />
            </motion.div>
            <div className={styles.desc}>
              <p className={styles.descContent}>
                {activeGame.description.replace(/(<([^>]+)>)/gim, '')}
              </p>
            </div>
            <div className={styles.shots}>
              {activeGameShots.map(activeGameShot => {
                const splits1 = activeGameShot.image.split('media/');
                const resiszeImgSrc = [
                  splits1[0],
                  'media/',
                  'resize/420/-/',
                  splits1[1],
                ].join('');
                return (
                  <img
                    className={styles.shot}
                    key={activeGameShot.id}
                    src={resiszeImgSrc}
                    alt={resiszeImgSrc}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
GameDetail.defaultProps = {
  cardId: 0,
  imgId: '',
  titleId: '',
  dateId: '',
};
GameDetail.propTypes = {
  cardId: PropTypes.string,
  imgId: PropTypes.string,
  titleId: PropTypes.string,
  dateId: PropTypes.string,
};
export default GameDetail;
