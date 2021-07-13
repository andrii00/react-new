import Posts from "../posts/Posts";

export default function User({item:{id,name,username},choose}) {

    return (
        <div style={{color: "red"}}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{username}</h3>
            <button onClick={() => {choose(id)}}> choose </button>
            {/*<Posts userId={id}/>*/}
        </div>
    )
}