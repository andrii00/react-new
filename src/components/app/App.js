import './App.css';
import {getPosts, getPost} from "../sevisec/Api";
import {useEffect, useState} from "react";
import Posts from "../posts/Posts";

export function App() {
    const [post, setPost] = useState(null)

    let appFn = (id) =>{
        {
            getPost(id).then(value => setPost(value.data))
        }
    }

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    })


    return (
        <div>
            <Posts items={posts} appFn={appFn}/>

            {
                post && <div>{JSON.stringify(post)}</div>
            }
        </div>
    )
}

export default App;
