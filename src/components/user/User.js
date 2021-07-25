import {Link} from 'react-router-dom'

export default function User({item ,item:{id, name}}) {

    return (
        <div>
            {id} - {name}
            {/*- <Link to={url + '/' + id}>user details</Link>*/}
            - <Link to={
            {
                pathname:'/users/'+ id,
                state:item
            }

        }>user details</Link>
        </div>
    )

}