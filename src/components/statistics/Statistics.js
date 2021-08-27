import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsList from '../StatisticsList/StatisticsList';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <div className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatisticsList stats={stats} />
    </div>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
