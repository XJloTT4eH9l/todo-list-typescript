import { FC, useContext, useState } from 'react';
import { ThemeContext } from '../../context';
import cn from 'classnames';

import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';

import styles from './Header.module.css';

const Header:FC = () => {
    const {theme, changeTheme} = useContext(ThemeContext);
    const [mouseOver, setMouseOver] = useState<boolean>(false);

    const mouseOverHandler: React.MouseEventHandler<HTMLImageElement> = () => {
        setMouseOver(true);
    }

    const mouseOutHandler:React.MouseEventHandler<HTMLImageElement> = () => {
        setMouseOver(false);
    }
    
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>TODO</h1>
            <button onClick={changeTheme} className={styles.header__btn}>
                <img 
                    className={cn(styles.header__img, mouseOver && styles.header__imgMouseOver)}
                    src={theme === 'light' ? moon : sun} 
                    alt={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
                    onMouseOver={mouseOverHandler}
                    onMouseOut={mouseOutHandler}
                />
            </button>
        </header>
    )
}

export default Header;