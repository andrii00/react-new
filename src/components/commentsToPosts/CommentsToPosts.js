import {useEffect, useState} from "react";
import {getPostsOfUser} from "../services/Post-Api";
import CommentToPost from "../commentToPost/CommentToPost";

export default function CommentsToPosts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
            getPostsOfUser().then(value => setPosts([...value]))
    },[]);

    return (
        <div>
            {
                posts.map(value => <CommentToPost key={value.id} item={value}/>)
            }
        </div>
    )
}