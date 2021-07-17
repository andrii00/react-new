export default function Comment({item: {id, name, body}}) {
    return (
        <div>
            <h3>{id}</h3>
            <hr/>
            <h4>{name}</h4>
            <h5>{body}</h5>
        </div>
    )
}