import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/user";

export default function Users() {
    const [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    });

    const choose = (id) => {
    let choosenUser = users.find(value => value.id === id);
        setUser(choosenUser)
    }

    return (<div>
        {
            users.map(value => <User key={value.id} item={value} choose={choose}/>) // { id, name, surname }
        }
        {
            user && <div> {user.id}  -  {user.name}</div>
        }
    </div>);
}
