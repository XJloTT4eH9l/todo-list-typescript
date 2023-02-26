import { useContext, FC, ChangeEvent } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../../context';
import styles from './InputText.module.css';

interface InputtextProps {
    inputValue: string;
    setInputValue: (value: string) => void;
}

const InputText:FC<InputtextProps> = ({ inputValue, setInputValue}) => {
    const { theme } = useContext(ThemeContext);

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    }

    const submitHandler = (e: any) => {
        if(e.key === 'Enter' && inputValue.length > 0) {
            console.log('New todo added');
            setInputValue('');
        }
    }
    return (
        <input
            className={cn(styles.input, theme === 'light' ? styles.input__light : styles.input__dark)}
            placeholder='Create a new todo...'
            onChange={(e) => inputHandler(e)} 
            onKeyDown={(e) => submitHandler(e)}
            value={inputValue}
        />
    )
}

export default InputText;