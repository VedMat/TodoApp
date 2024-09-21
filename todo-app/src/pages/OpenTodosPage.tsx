import React from "react";
import TodoList from "../components/TodoList";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { TodoAction } from "../types";
import { useTodos } from "../context/TodoContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TodoForm from "../components/TodoForm";

const OpenTodosPage: React.FC = () => {
    const { todosOpen } = useTodos();

    return (
        <>
            <Box>
                <TodoForm />
            </Box>
            <Box sx={{ mt: 2 }}>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="h5" gutterBottom>
                            Open
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TodoList todos={todosOpen} action={TodoAction.complete} />
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    );
};

export default OpenTodosPage;
