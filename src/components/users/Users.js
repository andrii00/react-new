import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";

export default function Users({usersList, fromApp}) {

    return (
        <div>
            {
                usersList.map(value => <User key={value.id} singleUser={value} fromApp={fromApp}/>)
            }
        </div>
    )
}