import {Link, Route, Switch} from "react-router-dom";
import Comments from "../comments/Comments";

export default function CommentToPost({item}) {
    return (
        <div>
            {item.id} - {item.title} - <Link to={'/posts/' + item.id}>comments to post</Link>


            <Switch>
                <Route path={'/posts/' + item.id} render={() => <Comments itemId={item.id}/>}/>
            </Switch>
        </div>
    )
}