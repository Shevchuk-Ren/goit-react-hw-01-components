import React from 'react';
import PropTypes from 'prop-types';

import { StatList, Item, Label, Percentage } from './StatisticsList.styled';

const StatisticsList = ({ stats }) => (
  <StatList>
    {stats.map(({ id, label, percentage }) => (
      <Item key={id}>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </Item>
    ))}
  </StatList>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
