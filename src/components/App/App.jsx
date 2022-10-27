import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import styles from './App.module.css';
import React, { useState } from 'react';

export const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, bad, neutral } = votes;

    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = votes;

    return Math.round((100 / countTotalFeedback()) * good);
  };

  const onLeaveFeedback = feedbackType => {
    setVotes({
      ...votes,
      [feedbackType]: votes[feedbackType] + 1,
    });
  };

  const { good, bad, neutral } = votes;
  const totalFeedback = countTotalFeedback();

  return (
    <div className={styles.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
