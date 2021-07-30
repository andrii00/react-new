import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch

} from "react-router-dom";
import Users from "../users/Users";
import {useEffect, useState} from "react";
import {getAllUsers} from "../services/User-Api";

export function App() {

   let [users, setUsers] =useState([])
    let [user, setUser] = useState({})
useEffect(() => {
    getAllUsers().then(value => setUsers([...value]))
},[]);

   const  fromApp = (id) => {
        let chosenUserOnClick = users.find (value => value.id === id);
    setUser({...chosenUserOnClick})
   }


    return (
       <div>
           {user.name}
           <Users usersList={users} fromApp={fromApp}/>
       </div>

    )
}

export default App;
