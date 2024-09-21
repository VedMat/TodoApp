import React, { useEffect, useState } from "react";
import { Snackbar as MUISnackbar, Alert } from "@mui/material";
import { useTodos } from "../context/TodoContext";

const Snackbar: React.FC = () => {
    const { snackbarMessage, closeSnackbar } = useTodos();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (snackbarMessage) {
            setOpen(true);
        }
    }, [snackbarMessage]);

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
        closeSnackbar();
    };

    return (
        <MUISnackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {snackbarMessage}
            </Alert>
        </MUISnackbar>
    );
};

export default Snackbar;
