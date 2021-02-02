import React, { useState, Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './slider.module.scss';
import {
  slideAnimation,
  sliderDotAnimation,
  sliderContainerAnimation,
} from '../../animation';

let resetTimerId = null;
const Slider = ({ imgs, timer }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeSlider = dir => {
    clearInterval(resetTimerId);
    if (dir === 'next') setActiveIndex((activeIndex + 1) % imgs.length);
    else if (dir === 'prev')
      setActiveIndex(activeIndex - 1 >= 0 ? activeIndex - 1 : imgs.length - 1);
  };
  useEffect(() => {
    resetTimerId = setInterval(() => {
      changeSlider('next');
    }, timer);
    return () => {
      clearInterval(resetTimerId);
    };
  }, [activeIndex]);
  return (
    <motion.div
      className={styles.container}
      variants={sliderContainerAnimation}
      initial='initial'
      animate='animate'
    >
      <div className={styles.slides}>
        <AnimatePresence>
          {imgs.map((img, i) => (
            <Fragment key={img}>
              {activeIndex === i && (
                <motion.img
                  className={styles.slide}
                  src={img}
                  alt={img}
                  variants={slideAnimation}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                />
              )}
            </Fragment>
          ))}
        </AnimatePresence>
      </div>
      <div className={styles.dots}>
        {imgs.map((img, i) => (
          <motion.span
            key={`${img}-dot`}
            className={`${styles.dot}`}
            onClick={() => {
              clearInterval(resetTimerId);
              setActiveIndex(i);
            }}
            variants={sliderDotAnimation}
            initial='initial'
            animate={activeIndex === i ? 'animate' : 'initial'}
            whileHover='whileHover'
          />
        ))}
      </div>
      <div className={styles.arrows}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size='3x'
          className={styles.arrow}
          onClick={() => changeSlider('prev')}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          size='3x'
          className={styles.arrow}
          onClick={() => changeSlider('next')}
        />
      </div>
    </motion.div>
  );
};
Slider.defaultProps = {
  imgs: [],
  timer: 0,
};
Slider.propTypes = {
  imgs: PropTypes.array,
  timer: PropTypes.number,
};
export default Slider;
