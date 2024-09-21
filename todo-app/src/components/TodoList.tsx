import React from "react";
import { Box, List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { Todo, TodoAction } from "../types";

interface TodoListProps {
    todos: Todo[]
    action: TodoAction
}

const TodoList: React.FC<TodoListProps> = ({ todos, action }) => {
    return (
        <List>
            {todos.length === 0 && <Box sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant="body1">Nothing to do</Typography></Box>}
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} action={action} />
            ))}
        </List>
    );
};

export default TodoList;
