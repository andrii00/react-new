import {useEffect, useState} from "react";
import {getSingleComment} from "../services/Comments-Api";
import Comment from "../comment/Comment";

export default function Comments({itemId}){
  let [comments, setComments] = useState([]);
  useEffect(()=>{
      getSingleComment(itemId).then(value => setComments([...value]))
  },[itemId])


    return(
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}