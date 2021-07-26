const url = 'https://jsonplaceholder.typicode.com/posts';

const getPostUser = (id) => fetch(url+`?userId=${id}`).then(value => value.json());

export {getPostUser}