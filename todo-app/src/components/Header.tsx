import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "../context/ThemeContext";
const Header: React.FC = () => {
    const { toggleTheme, isDarkMode } = useThemeContext();
    return (
        <AppBar position="static" sx={{ marginBottom: 4, backgroundColor: "#3f51b5" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" component="div">
                    Todo Manager
                </Typography>
                <div>
                    <Button color="inherit" component={Link} to="/" >
                        To Do
                    </Button>
                    <Button color="inherit" component={Link} to="/completed">
                        Done
                    </Button>
                    <IconButton color="inherit" onClick={toggleTheme} sx={{ marginLeft: 2 }}>
                        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
