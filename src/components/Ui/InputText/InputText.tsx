import { useContext, FC, ChangeEvent } from 'react';
import cn from 'classnames';
import { ITodo } from '../../../types/types';
import { ThemeContext } from '../../../context';
import styles from './InputText.module.css';

interface InputtextProps {
    todos: ITodo[];
    setTodos: (todos: ITodo[]) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
}

const InputText:FC<InputtextProps> = ({ inputValue, setInputValue, todos, setTodos }) => {
    const { theme } = useContext(ThemeContext);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') {
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
    }
    return (
        <input
            className={cn(styles.input, theme === 'light' ? styles.input__light : styles.input__dark)}
            placeholder='Create a new todo...'
            maxLength={20}
            onChange={inputHandler} 
            onKeyDown={onKeyDownHandler}
            value={inputValue}
        />
    )
}

export default InputText;