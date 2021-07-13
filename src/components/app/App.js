import './App.css';
import {useEffect, useState} from "react";
import {getUsers,getUser} from "../sevisec/Api";
import Users from "../users/Users";

export function App() {

    let appFn = (id) => {
        getUser(id).then(value => console.log(value.data))
    }

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    },[]);


    return (<div>
        <Users  items={users} appFn={appFn}/>
    </div>)
}

export default App;
