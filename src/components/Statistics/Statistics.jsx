import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li key={nanoid()} className={css.item}>
        Good: {good}
      </li>
      <li key={nanoid()} className={css.item}>
        Neutral: {neutral}
      </li>
      <li key={nanoid()} className={css.item}>
        Bad: {bad}
      </li>
      <li key={nanoid()} className={css.item}>
        Total: {total}
      </li>
      <li key={nanoid()} className={css.item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};