import { FC, useContext } from 'react';
import { ThemeContext } from '../../context';

import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

import styles from './Header.module.css';

const Header:FC = () => {
    const {theme, changeTheme} = useContext(ThemeContext)
    
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>TODO</h1>
            <button onClick={changeTheme} className={styles.header__btn}>
                <img 
                    className={styles.header__img}
                    src={theme === 'light' ? moon : sun} 
                    alt={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
                />
            </button>
        </header>
    )
}

export default Header;