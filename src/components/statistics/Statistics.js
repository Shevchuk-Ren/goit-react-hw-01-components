import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import { StatisticSection, Wrapper, Title } from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <StatisticSection>
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StatisticsList stats={stats} />
    </Wrapper>
  </StatisticSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
