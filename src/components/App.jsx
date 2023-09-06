import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Notification from '../components/Notification/Notification';
import SectionTitle from '../components/SectionTitle/SectionTitle';

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

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(1);
  }

  render() {
    return (
      <div>
        <SectionTitle maintitle="Please leave feedback">
          <FeedbackOptions
            goodClickIncrement={this.goodClickIncrement}
            neutralClickIncrement={this.neutralClickIncrement}
            badClickIncrement={this.badClickIncrement}
          />
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.good, this.neutral, this.bad)}
              feedbackPercentage={this.countPositiveFeedbackPercentage(
                this.good,
                this.neutral,
                this.bad,
                this.state.good
              )}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </SectionTitle>
      </div>
    );
  }
}
