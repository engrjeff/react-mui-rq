import axios from 'axios';

// types
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// service
export async function getPosts() {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSinglePost(postId: string) {
  try {
    const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
}
