import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
