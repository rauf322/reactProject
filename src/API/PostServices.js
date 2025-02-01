import axios from "axios";

export default class PostServices {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            return [];
        } finally {
            console.log('finally');
        }
    }
}