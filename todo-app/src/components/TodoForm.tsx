import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTodos } from "../context/TodoContext";


const TodoForm: React.FC = () => {
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText("");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2 }}>
            <TextField
                label="New task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="outlined" color="primary">
                Add
            </Button>
        </Box>
    );
};

export default TodoForm;
