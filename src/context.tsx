import { createContext, useState, ReactNode } from "react";

export interface ThemeContextInterface {
    theme: string,
    changeTheme?: () => void
}

const defaultState = {
    theme: 'light'
}

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

type ThemeProviderProps = {
    children: ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps) {
    const [theme, setTheme] = useState(defaultState.theme);

    const changeTheme = () => {
        switch(theme) {
            case 'light':
                setTheme('dark'); break
            case 'dark':
                setTheme('light'); break
        }
    } 
    
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}