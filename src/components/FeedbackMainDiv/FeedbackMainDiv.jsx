import PropTypes from 'prop-types';
import css from './FeedbackMainDiv.module.css'
export function FeedbackMainDiv({ children }) {
    return <div className={css.container}>{children}</div>;
}

FeedbackMainDiv.propTypes = {
  children: PropTypes.node.isRequired,
};
