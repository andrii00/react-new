const url = 'https://jsonplaceholder.typicode.com/posts';

const getPostsOfUser =()=> fetch(url).then(value => value.json());
const getPostOfUser = (id) =>
    fetch(url +`?userId=${id}`).then(value => value.json());

export {getPostOfUser, getPostsOfUser};