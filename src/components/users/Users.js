import User from "../user/User";

export default function Users ({usersList, fromApp}){
    return (
        <div>
            {
                usersList.map(value => <User key={value.id} fromApp={fromApp} value={value}/>)
            }
        </div>
    )

}