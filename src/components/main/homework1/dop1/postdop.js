import Commentsdop from "./commentsdop";

export default function Postdop({item:{id,title,body,userId}}){
    console.log(id)
    return(
        <div>

            <hr/>
            <h2>Post - {id} - {title}</h2>
            <p>{body}</p>
            <br/>


            <Commentsdop comentId={id}/>
        </div>
    )

}