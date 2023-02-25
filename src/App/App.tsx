import { useState } from 'react';
import cn from 'classnames';

import Background from '../components/Background';
import Header from '../components/Header';

import styles from './App.module.css';

function App() {
  const [theme, setTheme] = useState<string>('light');

  return (
    <div className={cn(styles.app, theme === 'light' ? styles.appLight : styles.appDark)}>
      <Background theme={theme} />
      <section className="todo">
        <Header theme={theme} setTheme={setTheme} />
      </section>
    </div>
  );
}

export default App;
