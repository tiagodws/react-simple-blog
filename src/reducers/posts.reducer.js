import { FETCH_POSTS, FETCH_POST } from "../actions/";

export default function(state = {}, { type, payload }) {
    switch (type) {
        case FETCH_POSTS: {
            return payload.data.reduce((postsObj, post) => {
                postsObj[post.id] = post;
                return postsObj;
            }, {});
        }
        case FETCH_POST: {
            const post = payload.data;
            return { ...state, [post.id]: post };
        }
        default: {
            return state;
        }
    }
}
