import React from 'react';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsEmojiAngryFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li className={css.btn} key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            <IconContext.Provider
              value={{ color: 'yellow', className: 'global-class-name', size: '5vh' }}
            >
              {option === 'good' && <BsFillEmojiSmileFill />}
              {option === 'neutral' && <BsFillEmojiNeutralFill />}
              {option === 'bad' && <BsEmojiAngryFill />}
            </IconContext.Provider>
            
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};