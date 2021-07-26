import Post from "../post/Post";

export default function Posts ({posts}){

    return(
        <div>
            {
                posts.map(val => <Post key={val.id} singlePost={val}/>)
            }
        </div>
    )

}