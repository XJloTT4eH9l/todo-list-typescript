import { FC } from 'react';

import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

import styles from './Header.module.css';

interface headerProps {
    theme: string;
    setTheme: (theme: string) => void;
}
const Header:FC<headerProps> = ({theme, setTheme}) => {
    const changeTheme = () => {
        switch(theme) {
          case 'light': setTheme('dark'); break
          case 'dark': setTheme('light'); break
          default: setTheme('light'); break
        }
      }

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