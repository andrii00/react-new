import React from "react";

export class Comment extends React.Component {

    render() {
        const {
            postId,
            id,
            name,
            email,
            body
        } = this.props;

        return (
            <div>
                <h1>{id} - {name}</h1>
                <h2>{postId}</h2>
                <p>{email}</p>
                <p>{body}</p>
            </div>)
    }
}