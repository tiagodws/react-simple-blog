import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        );
    }

    renderPosts() {
        const { posts } = this.props;
        return Object.values(posts).map(post => (
            <li className="list-group-item" key={post.id}>
                {post.title}
            </li>
        ));
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);

PostList.propTypes = {
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
};
