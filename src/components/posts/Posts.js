import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../services/Post-Api";

export default function Posts({itemId}) {

    let [post,setPost] = useState([]);
    useEffect(()=>{
        getPostOfUser(itemId).then(value => setPost([...value]))
    },[itemId]);


    useState()


    return (
        <div>

            {
                post.map(value => <Post key={value.id} singlePost={value}/>)
            }

        </div>
    )
}