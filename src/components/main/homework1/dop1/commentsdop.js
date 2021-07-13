import {useEffect, useState} from "react";
import Commentdop from "./commentdop";
export default function Commentsdop(props) {
    let [commets, setComments] = useState([]);
    console.log(commets);
    useEffect(() => {
            let {comentId} = props
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${comentId}`)
            .then(value => value.json())
            .then(value => setComments(value))


    });
    return (
        <div>
            {
                commets.map(value => <Commentdop key={value.id} item={value}/> )
            }
        </div>
    )
        //
}