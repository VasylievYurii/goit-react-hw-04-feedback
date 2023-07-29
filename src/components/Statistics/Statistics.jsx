import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const colorStyle = {
    color: `rgb(${255 * (1 - positivePercentage / 100)}, ${
      255 * (positivePercentage / 100)
    }, 0)`,
  };
  return (
    <>
      <ul className={css.statistics}>
        <li className={css.itemGood}>
          Good<span className={css.number}>{good}</span>
        </li>
        <li className={css.itemNeutral}>
          Neutral<span className={css.number}>{neutral}</span>
        </li>
        <li className={css.itemBad}>
          Bad<span className={css.number}>{bad}</span>
        </li>
      </ul>
      <p className={css.totalFeedback}>
        Total<span className={css.totalNumber}>{total}</span>
      </p>
      <p className={css.positiveFeedback}>
        Positive feedback
        <span className={css.positiveFeedbackPercentage} style={colorStyle}>
          {positivePercentage}%
        </span>
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};