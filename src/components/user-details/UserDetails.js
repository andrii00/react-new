import {useParams} from 'react-router-dom'
import {useEffect} from "react";
import {getParams} from "../api/Api";


export default function UserDetails(){
    let {id} = useParams();
        useEffect(()=>{
            getParams(id).then(value => console.log(value.data) )
        },[id])

    return(
        <div>
            user Details
        </div>
    )
}