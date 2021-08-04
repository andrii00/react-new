import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react";

const NestedChild = () => {

    const counter = useSelector(({counter: {value}}) => value)
    const dispatch = useDispatch();
    const posts = useSelector(({posts}) => posts)

    const fetchPosts = async () => {
        const responsePromise = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await responsePromise.json()

        dispatch({
            type: 'ADD_POSTS',
            payload: json
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    console.log(posts);

    let [inputNumers, setInputNumbers] = useState(null);

    function onSubmit(e) {
        e.preventDefault()
    }

    function onChange(e) {
        setInputNumbers(e.target.value)

    }

    return (
        <div>

            <div>
                <form onSubmit={onSubmit}>
                    <input type="number" name={'inputNumbers'} onChange={onChange}/>
                    <button onClick={() => {
                        dispatch({
                            type: 'INPUT_NUMBER',
                            payload: inputNumers
                        })
                    }}>input numbers
                    </button>
                </form>
            </div>


            <h1>{counter}</h1>
            <hr/>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }
            }>
                inc
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }
            }>
                dec
            </button>
            <button onClick={() => {
                dispatch({type: 'RES'})
            }
            }>
                RES
            </button>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.id} - {post.title}
                    </li>
                ))}
            </ul>

        </div>

    )
}

export function App() {
    return (
        <div>
            <NestedChild/>
        </div>
    )
}

export default App;
