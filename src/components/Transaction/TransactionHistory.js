import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ title, items }) => (
  <div className={styles.wrapper}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <table className={styles.transaction}>
      <thead>
        <tr className={styles.topics}>
          <th className={styles.topic}>Type</th>
          <th className={styles.topic}>Amount</th>
          <th className={styles.topic}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.item} key={id}>
            <td className={styles.cell} style={{ color: `rgb(235, 222, 222)` }}>
              {' '}
              {type}
            </td>
            <td className={styles.cell} style={{ color: `rgb(236, 240, 17)` }}>
              {amount}
            </td>
            <td className={styles.cell} style={{ color: `rgb(235, 222, 222)` }}>
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
TransactionHistory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
// TransactionHistory.propTypes = {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
// };
export default TransactionHistory;
