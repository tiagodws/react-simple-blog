import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_posts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=abc";

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export function createPost(post, callback) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, post).then(callback);

    return {
        type: CREATE_POST,
        payload: request,
    };
}
