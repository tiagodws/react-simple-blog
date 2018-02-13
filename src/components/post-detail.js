import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="col-12">
                <h3 className="page-title">Post Detail</h3>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostDetail);

PostDetail.propTypes = {
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
};
