import {Link, Route} from "react-router-dom";
import {useState} from "react";
import {getPostsOfUser} from "../services/Post-Api";
import Posts from "../posts/Posts";

export default function User({item}) {


    return (
        <div>
            {item.name} - <Link to={'/users/' + item.id}> posts </Link>


            <Route path={'/users/' + item.id} render={()=><Posts itemId={item.id}/>}/>
        </div>
    )
}