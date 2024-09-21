import React, { createContext, useContext, useState, ReactNode } from "react";
import { Todo, TodoAction } from "../types";

// Definizione del tipo per il contesto
interface TodoContextType {
    todosOpen: Todo[];
    todosCompleted: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (item: Todo, action: TodoAction) => void;
    snackbarMessage: string | null;
    closeSnackbar: () => void;
}

// Creiamo il contesto
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Definizione del provider per il contesto
export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todosCompleted, setTodosCompleted] = useState<Todo[]>([]);
    const [todosOpen, setTodosOpen] = useState<Todo[]>([]);
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now(), text, completed: false };
        setTodosOpen([...todosOpen, newTodo]);
        setSnackbarMessage(`Todo aggiunto: "${text}"`);
    };

    const toggleTodo = (item: Todo, action: TodoAction) => {

        switch (action) {
            case TodoAction.complete:
                setTodosOpen((prevTodos) => prevTodos.filter(x => x.id !== item.id))
                setTodosCompleted([...todosCompleted, { ...item, completed: true }]);
                setSnackbarMessage(`Todo completato: "${item.text}"`)
                break;
            case TodoAction.reopen:
                setTodosCompleted((prevTodos) => prevTodos.filter(x => x.id !== item.id))
                setTodosOpen([...todosOpen, { ...item, completed: false }]);
                setSnackbarMessage(`Todo riattivato: "${item.text}"`)
                break;
        }
    };

    const closeSnackbar = () => {
        setSnackbarMessage(null);
    };

    return (
        <TodoContext.Provider value={{ todosOpen, todosCompleted, addTodo, toggleTodo, snackbarMessage, closeSnackbar }}>
            {children}
        </TodoContext.Provider>
    );
};

// Custom hook per usare il contesto dei Todo
export const useTodos = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error("useTodos deve essere usato dentro un TodoProvider");
    }
    return context;
};
