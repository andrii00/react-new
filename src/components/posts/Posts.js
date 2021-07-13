import Post from "../post/post";

export default function Posts ({items, appFn}){

    return (
        <div>
            {
                items.map((value)=> <Post key={value.id} item={value} appFn={appFn}/>)
            }
        </div>
    )
}