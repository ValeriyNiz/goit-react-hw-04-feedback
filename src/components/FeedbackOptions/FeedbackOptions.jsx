import PropTypes from 'prop-types';
import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  return (
    <div className="vote">
      {props.options.map(option => (
        <button
          onClick={() => props.onLeaveFeedback(option)}
          key={option}
          className={styles.voteBtn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
