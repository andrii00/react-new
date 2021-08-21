import {ADD_TODOS, DELETE_TO_DO, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../actionTypes/ActionTypes";

const initialState = {
    todos: [],
    isLoading: false,
}

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODOS: {
            return {
                ...state, todos: action.payload
            }
        }
        case SET_LOADING_TRUE: {
            return {
                ...state, isLoading: true
            }
        }
        case SET_LOADING_FALSE: {
            return {
                ...state, isLoading: false
            }
        }
        case PUSH_NEW_TODO: {
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        }
        case DELETE_TO_DO: {
            return {
                ...state, todos: [...state.todos.filter(todo => todo.id !== action.payload) ]
            }
        }


        default:
            return state
    }
}