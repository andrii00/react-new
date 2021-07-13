import {useEffect, useState} from "react";
import Userdop from "./userdop";

export default function Usersdop() {
    let [usersDop, setUsersDop] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsersDop(value)
            })
    }, []);

        return(
            <div>
                {
                    usersDop.map(value => <Userdop key={value.id} item={value} />)
                }
            </div>
        )
}