import { Component } from "react";
import { searchImages } from "./GetImages/GetImages";
import GallerySearchForm from "components/Searchbar/GallerySearchForm/GallerySearchForm";
import Loader from "components/Loader/Loader";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ButtonLoadMore } from "components/Button/Button";
import Modal from "components/Modal/Modal";

class ImageGallery extends Component {
    state = {
       items: [],
       loading: false,
       error: null,
       search: "",
       page: 1,
       modalOpen: false,
       largeImageURL: ""
    }

    componentDidUpdate(_, prevState) {
        const { search, page} = this.state;
        if ( prevState.search !== search) {
            return this.fetchImages(search, page );
        }
        if (page > prevState.page) {
            return this.fetchImages(search, page );
        }
    }   
    onSearch = ({ search }) => {
        if (search === "") {
            return alert("Please enter text and try again.");
        }
        this.setState({
            search,
            items: [],
            page: 1
        })
    }
    loadMore = () => {
        
        this.setState(({ page }) => {
            return {
                page: page + 1
            }       
        })    
    }
    openModal = (largeImageURL) => {
        
        this.setState({
            modalOpen: true,
            largeImageURL
        })
    }
    closeModal = () => {
        this.setState({
            modalOpen: false,
            largeImageURL: ""
        })
    }

    async fetchImages() {
        const { search, page } = this.state;
        this.setState({
            loading: true,
        });

    try {
        const data = await searchImages(search, page);
        if (data.totalHits === 0) {
            return alert('Sorry, there are no images matching your search query. Please try again.');
        }
        this.setState(({items}) => {
            return {
                items: [...items, ...data.hits]    
            }
        })
    } catch (error) {
        this.setState({
            error
        })
    }
    finally {
        this.setState({
            loading: false
        })
    }
    }
    render() {
    const { items, loading, error, modalOpen, largeImageURL  } = this.state;
    const isImages = Boolean(items.length);
    const { onSearch, closeModal, openModal, loadMore } = this;
        return (
            <>
                {modalOpen && <Modal onClose={closeModal}>
                <img src={largeImageURL} alt="foto" />
                </Modal>}
                <GallerySearchForm onSubmit={onSearch} />
                {loading && <Loader />}
                {error && <p>Будь ласка спробуйте пізніше...</p>}
                {isImages && <ImageGalleryItem items={items} onClick={openModal} />} 
                {isImages && <ButtonLoadMore text="Load more" onClick={loadMore}/>}
            </>
        )
         
    }

}
export default ImageGallery;