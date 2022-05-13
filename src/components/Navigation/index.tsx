import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { ReturnComponentType } from 'types';

export const Navigation = (): ReturnComponentType => (
  <nav className={styles.navigation}>
    <Link to="/">Main</Link>
    <Link to="/addpoint">Go to add points</Link>
    <Link to="/pointslist">Points list</Link>
  </nav>
);
