import { FC } from 'react';
import { ITodo } from '../../types/types';
import TodoItem from '../../components/TodoItem';

import styles from './TodoList.module.css';

interface TodoListProps {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
}

const TodoList:FC<TodoListProps> = ({ todos, setTodos }) => {

    const removeTodo = (id: string) : void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: string) : void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo

            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }
    return (
        <ul className={styles.todoList}>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList