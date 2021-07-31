import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import {getAllUsers} from "../services/User-Api";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(value => setUsers([...value]))
    },[])

    return (
        <div>
            {
                users.map(value => <User item={value} key={value.id} />)
            }
        </div>
    )
}