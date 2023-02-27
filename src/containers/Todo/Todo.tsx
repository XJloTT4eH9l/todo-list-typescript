import { useState, useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../context';
import { ITodo } from '../../types/types';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Form from '../Form';
import TodoList from '../TodoList';

import styles from './Todo.module.css';

const Todo = () => {
    const { theme } = useContext(ThemeContext);
    const [todos, setTodos] = useState<ITodo[]>([]);
    
    return (
        <div className={cn(styles.todo, theme === 'light' ? styles.light : styles.dark)}>
            <Background />
            <div className={styles.todo__container}>
                <Header />
                <Form todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}

export default Todo;