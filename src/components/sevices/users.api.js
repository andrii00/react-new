const url = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () =>
    fetch(url).then(value => value.json())
;

const getSingleUser = (id) =>
    fetch(url+`/${id}`).then(value => value.json());

export {getAllUsers, getSingleUser}