import { FC } from 'react';
import cn from 'classnames';

import styles from './Background.module.css';

interface backGroundTheme {
    theme: string;
}

const Background:FC<backGroundTheme> = ({ theme }) => {
    return (
        <div className={cn(styles.background, theme === 'light' ? styles.light : styles.dark)}>

        </div>
    )
}

export default Background;