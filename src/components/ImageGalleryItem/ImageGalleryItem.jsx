import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";


export const ImageGalleryItem = ({ items, onClick }) => {

    const elements = items.map(({ id, webformatURL, largeImageURL }) => <li
        key={id}
        className={styles.imageGalleryItem}
        onClick={() => onClick(largeImageURL)}>
        <img
            className={styles.imageGalleryItemImage}
            src={webformatURL} loading="Lazy" alt="foto"/>
         </li>);
    return <ul className={styles.imageGallery}>{ elements}</ul>
    
}
ImageGalleryItem.defaultProps = {
    items: []
}
ImageGalleryItem.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}