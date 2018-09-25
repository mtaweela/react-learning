import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

@connect(store => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    }
})
export default class Layout extends React.Component {
    componentWillUnmount() {
        this.props.dispatch(fetchUser());
        console.log("nnnn")
    }

    render() {
        return <h1>{this.props.user.name}</h1>;
    }
}