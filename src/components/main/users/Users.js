import {useEffect, useState} from "react";

import {UserService} from "../../services/user.service";
import User from "../user/user";

export default function Users () {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        UserService.getUsers().then(usersResponse => {
            setUsers(usersResponse)
        })
    })

    return (<div>
            {
                users.map(value =><User { ...value }/> ) // { id, name, surname }
            }
        </div>)
}
