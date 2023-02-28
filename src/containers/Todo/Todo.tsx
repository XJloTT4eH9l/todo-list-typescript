import { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../context';
import { ITodo } from '../../types/types';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Form from '../Form';
import TodoList from '../TodoList';
import Footer from '../../components/Footer';

import styles from './Todo.module.css';

const Todo = () => {
    const { theme } = useContext(ThemeContext);
    const [todos, setTodos] = useState<ITodo[]>(localStorage.getItem('todo-items') !== null ? JSON.parse(localStorage.getItem('todo-items') || '') : []);

    useEffect(() => {
        localStorage.setItem('todo-items', JSON.stringify(todos));
    }, [todos])
    
    return (
        <div className={cn(styles.todo, theme === 'light' ? styles.light : styles.dark)}>
            <Background />
            <div className={styles.todo__container}>
                <Header />
                <Form todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
                <Footer todos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}

export default Todo;