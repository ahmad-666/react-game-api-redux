import React from 'react';
import PropTypes from 'prop-types';
import styles from './gameCard.module.scss';

const GameCard = ({ name, date, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={img} className={styles.img} />
      <div className={styles.content}>
        <p className={styles.info}> {name} </p>
        <p className={styles.info}> {date} </p>
      </div>
    </div>
  );
};
GameCard.defaultProps = {
  name: '',
  date: '',
  img: '',
};
GameCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
};
export default GameCard;
