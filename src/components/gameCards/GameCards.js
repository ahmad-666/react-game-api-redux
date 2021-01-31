import React from 'react';
import PropTypes from 'prop-types';
import styles from './gameCards.module.scss';
import GameCard from '../gameCard/GameCard';

const GameCards = ({ title, games }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.games}>
        {games.map(game => (
          <GameCard
            key={game.id}
            name={game.name}
            img={game.background_image}
            date={game.released}
          />
        ))}
      </div>
    </div>
  );
};
GameCards.defaultProps = {
  games: [],
};
GameCards.propTypes = {
  title: PropTypes.string.isRequired,
  games: PropTypes.array,
};
export default GameCards;
