import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import styles from './gameCard.module.scss';
import { fetchActiveGame } from '../../store/actions/gameActions';
import { gameCardAnimation } from '../../animation';

const GameCard = ({ name, date, img, id }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(fetchActiveGame(id));
    document.body.classList.add('disableScroll');
  };
  const splits = img && img.split('media/');
  const resizeImgSrc =
    splits &&
    splits.length &&
    [splits[0], 'media/', 'resize/420/-/', splits[1]].join('');
  return (
    <motion.div
      className={styles.card}
      variants={gameCardAnimation}
      initial='initial'
      animate='animate'
      layoutId={id.toString()}
    >
      <Link to={`/games/${id}`} onClick={() => clickHandler()}>
        <motion.img
          src={resizeImgSrc}
          alt={resizeImgSrc}
          className={styles.img}
          layoutId={`img-${id}`}
        />
        <div className={styles.content}>
          <motion.p className={styles.info} layoutId={`title-${id}`}>
            {name}
          </motion.p>
          <motion.p className={styles.info} layoutId={`date-${id}`}>
            {date}
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
};
GameCard.defaultProps = {
  name: '',
  date: '',
  img: '',
  id: '',
};
GameCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
};
export default GameCard;
