import { FC, useContext, memo } from 'react';
import cn from 'classnames';
import { ITodo } from '../../types/types';
import { ThemeContext } from '../../context';
import CheckBox from '../Ui/CheckBox';
import removeBtn from '../../assets/img/remove-btn.svg';
import styles from './TodoItem.module.css';

interface TodoItemProps extends ITodo {
    removeTodo: (id: string) => void;
    toggleTodo: (id: string) => void;
}

const TodoItem:FC<TodoItemProps> = ({ 
    id,
    text, 
    completed, 
    removeTodo, 
    toggleTodo 
}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <li className={cn(styles.item, theme === 'light' ? styles.light : styles.dark)}>
            <div className={styles.item__container}>
                <CheckBox 
                    id={id}
                    completed={completed}
                    toggleTodo={toggleTodo}
                />
                <p className={cn(styles.item__text, completed && styles.item__textCompleted)}>{text}</p>
            </div>
            <button onClick={() => removeTodo(id)} className={styles.item__removeBtn}>
                <img className={styles.item__removeImg} src={removeBtn} alt='Delete todo' />
            </button>
        </li>
    )
}

export default memo(TodoItem);