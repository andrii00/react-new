export default function Post({item,appFn}) {
   return(
       <div>
           <h2>{item.id} - {item.title}</h2>
           <hr/>
           <p>
               {item.body}
           </p>

           <button onClick={
               () => appFn(item.id)
           }>
               click
           </button>
       </div>
   )
}


