import React from 'react';
import propTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import css from './statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <StatisticsItem rate="Good:" number={good} />
      <StatisticsItem rate="Neutral:" number={neutral} />
      <StatisticsItem rate="Bad:" number={bad} />
      <StatisticsItem rate="Total:" number={total} />
      <li className={css.statisticsItem}>
        <p>Percentage:</p>
        <span>{percentage}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  percentage: propTypes.number.isRequired,
};
