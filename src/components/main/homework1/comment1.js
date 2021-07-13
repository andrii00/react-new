export default function Comment1 ({item:{postId,id,name,email}}){
    return(
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{postId}</h4>
        </div>
    )
}