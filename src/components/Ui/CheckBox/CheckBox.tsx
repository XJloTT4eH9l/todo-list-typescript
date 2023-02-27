import { FC } from 'react';
import styles from './CheckBox.module.css';

interface CheckBoxProps {
    id: string;
    completed: boolean;
    toggleTodo: (id: string) => void;
}

const CheckBox:FC<CheckBoxProps> = ({id, completed, toggleTodo}) => {
    return (
        <label className={styles.checkbox}>
            <input
                className={styles.ckeckbox__default} 
                type='checkbox'
                checked={completed} 
                onChange={() => toggleTodo(id)} 
            />
            <span className={styles.checkbox__custom}></span>
        </label>
    )
}

export default CheckBox