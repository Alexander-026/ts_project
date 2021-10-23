import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemsProps {
   todo: ITodo
}

const TodoItems: FC<TodoItemsProps> = ({todo}) => {
   return (
      <div>
         <input type="checkbox" checked={todo.completed} />
         {todo.id}. {todo.title}
         
      </div>
   );
};

export default TodoItems;