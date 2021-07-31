import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch

} from "react-router-dom";
import Users from "../users/Users";
import {useEffect, useState} from "react";
import {getAllUsers} from "../services/User-Api";
import Posts from "../posts/Posts";
import CommentsToPosts from "../commentsToPosts/CommentsToPosts";

export function App() {


    return (
      <Router>
          <div>
              <Link to={'/users'}>users page</Link>
              <hr/>
              <Link to={'/posts'}>posts page</Link>
              <hr/>

          </div>

          <Switch>
              <Route path={'/users'} component={Users}/>
              <Route path={'/posts'} component={CommentsToPosts}/>
          </Switch>

      </Router>
    )
}

export default App;
