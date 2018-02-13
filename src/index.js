import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route } from "react-router-dom";

import reducers from "./reducers";
import PostList from "./components/post-list";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <div className="row">
                    <h1 className="page-title">Simple Blog</h1>
                </div>
                <div className="row">
                    <Route exact={true} path="/" component={PostList} />
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container"),
);
