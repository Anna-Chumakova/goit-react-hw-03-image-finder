import { nanoid } from "nanoid";
import { Component } from "react";
import Searchbar from "../Searchbar";
import styles from "./GallerySearchForm.module.css";
class GallerySearchForm extends Component {
    state = {
        search: ""
    }
    searchId = nanoid();
    searchInput = {
        type: "text",
        name: "search",
        autoComplete: "off",
        autoFocus: true,
        placeholder: "Search images and photos", 
        required: true,
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({...this.state});
        this.reset();
    }
    reset() {
        this.setState({
            search: "",
        })
    }
    render() {
        const { search } = this.state;
        const { handleSubmitForm, searchId, handleChange, searchInput } = this;
        return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={handleSubmitForm}>
                    <button type="submit" className={styles.searchFormButton} onClick={ handleSubmitForm}>
                        <span className={styles.buttonLabel}>Search</span>
                    </button>

                    <Searchbar
                        value={search} 
                        id={searchId}
                        handleChange={handleChange}
                        {...searchInput}
                    />
                </form>
            </header>
                
        )
    }
}
export default GallerySearchForm;