import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './gameCard.module.scss';
import { fetchActiveGame } from '../../store/actions/gameActions';

const GameCard = ({ name, date, img, id }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(fetchActiveGame(id));
    document.body.classList.add('disableScroll');
  };
  return (
    <div className={styles.card}>
      <Link to={`/games/${id}`} onClick={() => clickHandler()}>
        <img src={img} alt={img} className={styles.img} />
        <div className={styles.content}>
          <p className={styles.info}> {name} </p>
          <p className={styles.info}> {date} </p>
        </div>
      </Link>
    </div>
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
