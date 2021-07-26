import Posts from "../posts/Posts";
import {useState} from "react";
import {getPostUser} from "../sevices/post.api";

export default function User({value, fromApp}) {
    let [posts, setPosts] = useState([])
    const getPosts = () => {
        getPostUser(value.id).then(value => {
            console.log(value);
            setPosts([...value])})
    }

    return (
        <div>
            {value.name} -
            <button
                onClick={() => {
                    fromApp(value.id)
                    getPosts();
                }
                }
            >
                choose this user
            </button>


            <div>
                <Posts posts={posts}/>
            </div>
        </div>
    )
}