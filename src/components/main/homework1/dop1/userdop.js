import Postsdop from "./postsdop";

export default function Userdop({item: {id, username, email}}) {

    return(
        <div>
            <h1>{id} - {username}</h1>
            <h2>{email}</h2>

            <Postsdop userId={id}/>
        </div>
    )

}