import { useState, useContext, useEffect, FC } from 'react';
import { ThemeContext } from '../../context';
import { ITodo } from '../../types/types';
import cn from 'classnames';
import styles from './Footer.module.css';

interface FooterProps {
    todos: ITodo[],
    setTodos: (todos: ITodo[]) => void
}

const Footer:FC<FooterProps> = ({ todos, setTodos }) => {
    const { theme, filter, filters, changeFilter } = useContext(ThemeContext);
    const [itemTodo, setItemTodo] = useState<number>(0);

    const clearCompleted = () => {
        setTodos(todos.filter(todo => todo.completed !== true));
    }

    useEffect(() => {
        setItemTodo(todos.filter(todo => todo.completed === false).length);
    }, [todos])

    return (
        <footer className={cn(styles.footer, theme === 'light' ? styles.footerLight : styles.footerDark)}>
            <div className={styles.footer__inner}>
                <p className={styles.footer__count}>{itemTodo} items left</p>
                <ul className={styles.filters}>
                    {
                        filters && (
                            filters.map(item => (
                                <li 
                                    key={item} 
                                    className={cn(styles.filters__item, theme === 'light' ? styles.light : styles.dark, filter === item && styles.fiter__itemActive)}
                                    onClick={() => changeFilter?.(item)}
                                >
                                    {item}
                                </li>
                            ))
                        )
                    }
                </ul>
                <p 
                    onClick={clearCompleted} 
                    className={cn(styles.footer__clear, theme === 'light' ? styles.light : styles.dark)}
                >
                    Clear Completed
                </p>
            </div>
        </footer>
    )
}

export default Footer;