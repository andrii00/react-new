import Posts from "../posts/Posts";

export default function User(props) {
    const {id, name, username} = props;

    return (
        <div style={{color: "red"}}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{username}</h3>

            <Posts userId={id}/>
        </div>
    )
}