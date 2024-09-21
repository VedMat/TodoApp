import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { Todo, TodoAction } from "../types";
import { useTodos } from "../context/TodoContext";

interface TodoItemProps {
    todo: Todo;
    action: TodoAction;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, action }) => {
    const { toggleTodo } = useTodos();
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => toggleTodo(todo, action)}>
                    {todo.completed ? <CheckCircle color="success" /> : <RadioButtonUnchecked />}
                </IconButton>
            }
        >
            <ListItemText
                primary={todo.text}
                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
        </ListItem>
    );
};

export default TodoItem;
