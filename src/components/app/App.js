import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from "react";
import {addToDos, pushNewToDo, removeToDo, setLoadingFalse, setLoadingTrue} from "../actionCreators";
import {DELETE_TO_DO} from "../actionTypes/ActionTypes";

const CreateToDoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !description || loading) return;


        try {
            setLoading(true);
            await onSubmit(title, description);
            setTitle('');
            setDescription('');
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder={'title'}
                   value={title}
                   onChange={({target: {value}}) => {
                       setTitle(value)
                   }
                   }/>
            <br/>
            <input type="text"
                   placeholder={'description'}
                   value={description}
                   onChange={({target: {value}}) => setDescription(value)}/>
            <br/>
            <button type={'submit'} disabled={!title || !description || loading}>create todo</button>

        </form>
    )
}


const TodoList = ({todos, isLoading, todoDelete}) => {


    if (isLoading) return <h1>LOADING......></h1>

    return (
        <div>
            {
                todos.map(todo => (
                    <div>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <span>Is completed: {todo.completed.toString()}</span>
                        <br/>
                        <span>Created at: {new Date(todo.createdAt).toLocaleString()}</span>
                        <br/>
                        <br/>
                        <button onClick={() => todoDelete(todo.id)}>delete</button>
                        <hr/>

                    </div>
                ))
            }
        </div>
    )

}


export function App() {
    const {todos, isLoading} = useSelector(({todosReducer}) => todosReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos');
            const data = await response.json();
            dispatch(addToDos(data));

        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoadingFalse());
        }
    }

    const onToDoCreate = async (title, description) => {
        if (!title || !description) return;

        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        const data = await response.json();

        dispatch(pushNewToDo(data))
    }

    const deleteTodo = async (id) => {

        await fetch('http://localhost:8888/delete-todo/' + id, {
            method: 'DELETE',
        });

        dispatch({type: DELETE_TO_DO, payload: id})
    }



    return (
        <div className={'App'}>
            <CreateToDoForm onSubmit={onToDoCreate}/>
            <TodoList todos={todos} isLoading={isLoading} todoDelete={deleteTodo} />
        </div>
    )
}

export default App;
