import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import { useState } from 'react';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [isNoFeedbackClicked, setIsNoFeedbackClicked] = useState(true);

  function handleClick(e) {
    setIsNoFeedbackClicked(false);
    setState(prevState => ({ ...prevState, [e]: prevState[e] + 1 }));
  }

  function countTotalFeedback() {
    const { good, neutral, bad } = state;
    let total = 0;
    total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = state;
    let positiveFeedbackPercentage = 0;
    positiveFeedbackPercentage = Math.round(
      (good * 100) / (good + neutral + bad)
    );
    return positiveFeedbackPercentage;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      {isNoFeedbackClicked ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
