import React from "react";

import {CommentService} from "../../services/comment.service";
import {Comment} from "../comment/comment";

// state - коробочка
// setState - покласти в коробочку

export class Comments extends React.Component {
    state = {
        comments: []
    }

    // when component is ready to draw
    async componentDidMount() {
       const receivedComments = await CommentService.getComments()

        this.setState({
            comments: receivedComments
        })
    }


    // state.xxx, state.comments
    // const { xxx, comments } = state;


    render() {
        // const { comments } = this.state;
        // <div  key={value.id}> { value.name } </div>
        console.log(this.state.comments)
        return (
            <div>
                {
                    this.state.comments.map((value) => <Comment { ...value } />)
                }
            </div>
        );
    }
}