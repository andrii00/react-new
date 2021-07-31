const url = 'https://jsonplaceholder.typicode.com/comments';

const getAllComments = () =>
    fetch(url).then(value => value.json())
;

const getSingleComment = (id) =>
    fetch(url + '?postId=' + id).then(value => value.json())
;

export {getAllComments,getSingleComment};