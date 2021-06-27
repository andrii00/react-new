/* For request */

// request - запит
// .then - очікую
// response - отримав шо очікував

// request.then(response => {} )

// .then === await
// async () / await

// request.then(res => {})
//  const res = await request;

export class CommentService {
    static async getComments() {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')

        return response.json();
    }
}
