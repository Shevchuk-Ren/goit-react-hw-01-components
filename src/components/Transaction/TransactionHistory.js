import React from 'react';
import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css';
import {
  Wrapper,
  Title,
  Transaction,
  Topic,
  Tbody,
  Item,
  Cell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ title, items }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    <Transaction>
      <thead>
        <tr className="topics">
          <Topic>Type</Topic>
          <Topic>Amount</Topic>
          <Topic>Currency</Topic>
        </tr>
      </thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Item key={id}>
            <Cell style={{ color: `rgb(235, 222, 222)` }}> {type}</Cell>
            <Cell style={{ color: `rgb(236, 240, 17)` }}>{amount}</Cell>
            <Cell style={{ color: `rgb(235, 222, 222)` }}>{currency}</Cell>
          </Item>
        ))}
      </Tbody>
    </Transaction>
  </Wrapper>
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
