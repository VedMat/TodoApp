import React from "react";
import TodoList from "../components/TodoList";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { TodoAction } from "../types";
import { useTodos } from "../context/TodoContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CompletedTodosPage: React.FC = () => {
    const { todosCompleted } = useTodos();

    return (
        <Box sx={{ mt: 2 }}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"

                >
                    <Typography variant="h5" gutterBottom>
                        Done
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TodoList todos={todosCompleted} action={TodoAction.reopen} />
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default CompletedTodosPage;
