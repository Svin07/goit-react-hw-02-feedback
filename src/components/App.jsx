import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClickIncrement = () => this.setState(prev => ({ good: prev.good + 1 }));
  neutralClickIncrement = () =>
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  badClickIncrement = () => this.setState(prev => ({ bad: prev.bad + 1 }));

  // totalValue = ({ good, neutral, bad }) =>

  render() {
    return (
      <div>
        <FeedbackOptions />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={1}
          positivePercentage={1}
        />
      </div>
    );
  }
}

// options={} onLeaveFeedback={}
