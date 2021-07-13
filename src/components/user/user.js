export default function User ({item, fnFather}){
    return(
        <div>
            {item.id} - {item.name}

            <button onClick={
                () => fnFather(item.id)
            }>click</button>

        </div>
    )
}