import { FormEvent, useRef } from 'react';
import { useCreateTodo } from './todo-hooks';

function TodoForm() {
  const createMutation = useCreateTodo();

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = {
      userId: 1,
      title: formData.get('title') as string,
      completed: formData.get('completed') === 'on' ? true : false,
    };

    // mutate here
    await createMutation.mutateAsync(values);

    form.current?.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <fieldset disabled={createMutation.isLoading}>
          <div>
            <label htmlFor='title'>Name</label>
            <input type='text' name='title' id='title' />
          </div>
          <div>
            <label htmlFor='completed'>Is Completed?</label>
            <input type='checkbox' name='completed' id='completed' />
          </div>
          <button type='submit'>{createMutation.isLoading ? 'Submitting...' : 'Submit'}</button>
        </fieldset>
      </form>
    </div>
  );
}

export default TodoForm;
