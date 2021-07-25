import {useParams} from 'react-router-dom'
import {useEffect} from "react";
import {getParams} from "../api/Api";


export default function UserDetails2(props){
    console.log(props)
    let {location: {state}} = props;
    return(
        <div>
            {JSON.stringify(state)}
        </div>
    )
}