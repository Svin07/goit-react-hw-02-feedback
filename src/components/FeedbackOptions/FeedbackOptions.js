// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
  return (
    <div className={css.container}>
      <button
        onClick={this.goodClickIncrement}
        type="button"
        className={css.button}
      >
        Good
      </button>
      <button
        onClick={this.neutralClickIncrement}
        type="button"
        className={css.button}
      >
        Neutral
      </button>
      <button
        onClick={this.badClickIncrement}
        type="button"
        className={css.button}
      >
        Bad
      </button>
    </div>
  );
}
