import { createContext, useState, ReactNode } from "react";

export interface ThemeContextInterface {
    theme: string;
    filter: string;
    filters: string[];
    changeTheme: () => void;
    changeFilter : (filter: string) => void;
}

const defaultState = {
    theme: 'dark',
    filter: 'All'
}

export const ThemeContext = createContext<Partial<ThemeContextInterface>>(defaultState);

type ThemeProviderProps = {
    children: ReactNode
}

export default function ThemeProvider({ children } : ThemeProviderProps) {
    const [theme, setTheme] = useState(defaultState.theme);
    const [filter, setFilter] = useState(defaultState.filter);
    const filters: string[] = ['All', 'Active', 'Completed'];

    const changeTheme = () => {
        switch(theme) {
            case 'light': setTheme('dark'); break
            case 'dark': setTheme('light'); break
        }
    }
    
    const changeFilter = (filter: string) => {
        switch(filter) {
            case 'All': setFilter('All'); break
            case 'Active': setFilter('Active'); break
            case 'Completed': setFilter('Completed'); break
        }
    }
    
    return (
        <ThemeContext.Provider value={{theme, changeTheme, filters, filter, changeFilter}}>
            {children}
        </ThemeContext.Provider>
    )
}