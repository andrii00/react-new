import {useEffect, useState} from "react";
import Comment1 from "./comment1";
export default function Comments1() {

    let [comments, setComments] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })

    }, []);


    return(
        <div>
            {
                comments.map(value => <Comment1 key={value.id} item={value}/>)
            }
        </div>
    )
}
