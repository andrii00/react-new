import User from "../user/user";

export default function Users({items, appFn}){
        return(
            <div>
                {
                    items.map((value) => <User key={value.id} item={value} fnFather={appFn}/>)
                }
            </div>
        )
}