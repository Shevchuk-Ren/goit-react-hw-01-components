import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li className={styles.item} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

StatisticsList.propTypes = {
  percentage: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default StatisticsList;
