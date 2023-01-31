import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo, getTodos, Todo } from './todo-service';
import { toast } from 'react-toastify';

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
}

// mutation
export function useCreateTodo() {
  const queryClient = useQueryClient();
  const createMutation = useMutation<Todo, string, Omit<Todo, 'id'>>({
    mutationKey: ['posts'],
    mutationFn: (todo) => createTodo(todo),
    onMutate(todoData) {
      //
    },
    onSuccess(todo, todoData, context) {
      //   queryClient.invalidateQueries({ queryKey: ['todos'] });
      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos) => {
        if (!oldTodos) return [todo];

        return [todo, ...oldTodos];
      });
      toast.success('Todo saved!');
    },
    onError(error, variables, context) {
      toast.error(error);
    },
  });

  return createMutation;
}
