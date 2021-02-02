import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './nav.module.scss';
import logoSrc from '../../assets/imgs/logo.png';
import SearchBox from '../searchbox/Searchbox';
import { navAnimation } from '../../animation';

const Nav = () => {
  const history = useHistory();
  const submitCb = searchVal => {
    history.push(`/search?q=${searchVal}`);
  };
  return (
    <motion.div
      className={styles.nav}
      variants={navAnimation}
      initial='initial'
      animate='animate'
    >
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logoSrc} alt={logoSrc} />
          <h1 className={styles.sitename}> ignite </h1>
        </div>
      </Link>

      <SearchBox submitCb={searchVal => submitCb(searchVal)} />
    </motion.div>
  );
};
export default Nav;
