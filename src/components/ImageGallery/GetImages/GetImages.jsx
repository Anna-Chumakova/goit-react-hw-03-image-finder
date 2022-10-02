import axios from "axios";
import PropTypes from "prop-types";

const URL = "https://pixabay.com/api";
const LIMIT = 12;
const KEY = "29286270-7757e7c355ff8fc146957d618"
const instance = axios.create({
    baseURL: URL,
    params: {
        key: KEY,
        per_page: LIMIT,
    }
});

export const searchImages = async(q, page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            page,
            q,
        }
    });
    return data;
}

searchImages.PropTypes = {
    q: PropTypes.string,
    page: PropTypes.number
}