import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const ButtonLoadMore = ({ text, onClick }) => {
    return (<button type="button" className={styles.btn} onClick={onClick}>{ text}</button>)
}

ButtonLoadMore.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}