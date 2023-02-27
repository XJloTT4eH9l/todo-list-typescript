import { FC, useContext } from 'react';
import { ITodo } from '../../types/types';
import { ThemeContext } from '../../context';
import TodoItem from '../../components/TodoItem';

import styles from './TodoList.module.css';

interface TodoListProps {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
}

const TodoList:FC<TodoListProps> = ({ todos, setTodos }) => {
    const { filter } = useContext(ThemeContext);

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

    const changeFilter = () => {
        switch(filter) {
          case 'All' :
            return todos
          case 'Active':
            return todos.filter(todo => todo.completed === false);
          case 'Completed':
            return todos.filter(todo => todo.completed === true);
          default:
            return todos
        }
    }

    return (
        <ul className={styles.todoList}>
            {
                todos.length > 0 && (
                    changeFilter().map(todo => (
                        <TodoItem 
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                    ))
                )
            }
        </ul>
    )
}

export default TodoList