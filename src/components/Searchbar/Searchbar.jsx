import PropTypes from "prop-types";
import styles from "./Searchbar.module.css"
const Searchbar = ({ id, value, name, handleChange, type, placeholder, required, label}) => {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id}
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className={styles.searchFormInput}
                placeholder={placeholder}
                required={required} />
        </div>
        
   ) 
}
export default Searchbar;

Searchbar.defaultProps = {
    type: "text",
    required: false,
}

Searchbar.propTypes = {
    id: PropTypes.string, 
    value: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    handleChange: PropTypes.func.isRequired, 
    type: PropTypes.string, 
    className: PropTypes.string, 
    placeholder: PropTypes.string,  
    required: PropTypes.bool,
    label: PropTypes.string
}