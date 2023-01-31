import axios, { AxiosError } from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodos() {
  try {
    const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/users/1/todos');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createTodo(todo: Omit<Todo, 'id'>) {
  try {
    const response = await axios.post<Todo>(
      'https://jsonplaceholder.typicode.com/users/1/todos',
      todo
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.message;
    }

    throw 'An error has occured';
  }
}
