import React, { createContext, useContext, useState, ReactNode } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline /> {/* Applica il tema globale (dark/light) */}
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useThemeContext deve essere usato dentro un ThemeProvider");
    }
    return context;
};
