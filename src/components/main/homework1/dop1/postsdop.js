import {useEffect, useState} from "react";
import Postdop from "./postdop";

export default function Postsdop(props) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
            let {userId} = props;
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })

    });
    return(
        <div>

            {
                posts.map(value => <Postdop key={value.id} item={value} />)
            }
        </div>
    )

}