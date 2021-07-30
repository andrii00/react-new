import Post from "../post/Post";

export default function Posts({postList}) {

    return (
        <div>

            {
                postList.map(value => <Post key={value.id} singlePost={value}/>)
            }

        </div>
    )
}