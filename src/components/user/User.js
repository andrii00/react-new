import {Link} from "react-router-dom";
import {useState} from "react";
import {getPostsOfUser} from "../services/Post-Api";
import Posts from "../posts/Posts";

export default function User({singleUser, fromApp}) {
    let [posts, setPosts] = useState([]);

    const getPosts = () => {
        getPostsOfUser(singleUser.id).then(value => setPosts([...value]))
    }

    return (
        <div>
            {singleUser.id} - {singleUser.name} - <button
            onClick={() => {
                fromApp(singleUser.id)
                getPosts()
            }}
        >
            choose this user
        </button>
            <div>
                <Posts postList={posts}/>
            </div>
        </div>
    )
}