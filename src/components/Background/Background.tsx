import { FC, useContext } from 'react';
import { ThemeContext } from '../../context';
import cn from 'classnames';

import styles from './Background.module.css';


const Background:FC = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className={cn(styles.background, theme === 'light' ? styles.light : styles.dark)} />
    )
}

export default Background;