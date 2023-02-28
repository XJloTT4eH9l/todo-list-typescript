import { useState, useContext, FC, memo} from 'react';
import { ThemeContext } from '../../context';
import { ITodo } from '../../types/types';
import cn from 'classnames';

import InputText from '../../components/Ui/InputText';

import styles from './Form.module.css';

interface FormProps {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
}

const Form:FC<FormProps> = ({ todos, setTodos }) => {
    const { theme } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState<string>('');

    const addTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if(inputValue.length !== 0) {
            const todo: ITodo = {
                id: new Date().toISOString(),
                text: inputValue, 
                completed: false
            }
            setTodos([...todos, todo]);
            setInputValue('');
        }
    }
    
    return (
        <form className={styles.form}>
            <InputText 
                inputValue={inputValue} 
                setInputValue={setInputValue}
                todos={todos}
                setTodos={setTodos} 
            />
            <button 
                onClick={addTodo} 
                className={cn(styles.btn, theme === 'light' ? styles.light : styles.dark)}
            >
                Add todo
            </button>
        </form>
    )
}

export default memo(Form);