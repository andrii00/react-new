import './App.css';
import {useEffect, useState} from "react";
import {getAllUsers} from "../sevices/users.api";
import Users from "../users/Users";


export function App() {

    let [users, setUsers] = useState([])
    let [user,setUser] = useState({})

    useEffect(() => {
        getAllUsers().then(value => setUsers([...value]))
    })
    const fromApp = (id) => {
        setUser({...users.find(value => value.id === id)})
    }

    return(
        <div>
            <h3>{user.username}</h3>
            <Users usersList={users} fromApp={fromApp}/>
        </div>
    )

}

export default App;
