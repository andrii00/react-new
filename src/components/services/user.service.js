export class UserService {
    static async getUsers() {
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");

        return usersResponse.json();
    }

    static async getUserPosts(id) {
        const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);

        return usersResponse.json();
    }
}