import './App.css';
import {useReducer} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

// function reducer(state, action) {
//    switch (action.type){
//        case "A":
//            return {...state, a:state.a + action.payload};
//        case "B":
//            return {...state, b:state.b + action.payload};
//        default:
//            return {...state}
//    }
// }
//
//
// export function App() {
//
// let [state,dispatch] = useReducer(reducer,{a:0, b:0});
//
//     return (
//         <div>
//             <button onClick={() => {dispatch({type:'A', payload:1 })}}>inc a - {state.a}</button>
//             <br/>
//             <button onClick={() => {dispatch({type:'B', payload:1 })}}>inc b - {state.b}</button>
//         </div>
//     )
//
// }


export function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/users'}> to users</Link>
                <br/>
                <Link to={'/posts'}> to posts</Link>
                <br/>
                <Link to={'/comments'}> to comments</Link>

                <Switch>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/comments'}><Comments/></Route>
                    <Route path={'/users'} render={(props) => <Users {...props}/>}/>
                    <Route path={'/'} render={() => <div>Home Page</div>}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
