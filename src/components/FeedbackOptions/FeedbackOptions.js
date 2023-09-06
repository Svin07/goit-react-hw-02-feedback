// import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({
  goodClickIncrement,
  neutralClickIncrement,
  badClickIncrement,
}) {
  return (
    <div className={css.container}>
      <button onClick={goodClickIncrement} type="button" className={css.button}>
        Good
      </button>
      <button
        onClick={neutralClickIncrement}
        type="button"
        className={css.button}
      >
        Neutral
      </button>
      <button onClick={badClickIncrement} type="button" className={css.button}>
        Bad
      </button>
    </div>
  );
}
