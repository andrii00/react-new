// import {useEffect, useState} from "react";
//
// import {UserService} from "../../services/user.service";
// import Post from "../post/Post";
//
// export default function Posts(props) {
//     const [posts, setPosts] = useState([]);
//
//     useEffect(() => {
//         const {userId} = props;
//
//         UserService.getUserPosts(userId).then(userPosts => {
//             setPosts(userPosts)
//         })
//     })
//
//     return (
//         <div>
//             <b>
//                 <hr/>
//             </b>
//
//             {
//                 posts.map(value => <Post {...value}/>) // { id, name, surname }
//             }
//
//             <b>
//                 <hr/>
//             </b>
//         </div>
//     )
// }
