import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Snackbar from "./components/Snackbar";
import { Container } from "@mui/material";
import CompletedTodosPage from "./pages/CompletedTodosPage";
import OpenTodosPage from "./pages/OpenTodosPage";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Router>
          <Header />
          <Container maxWidth="sm">
            <Routes>
              <Route path="/" element={<OpenTodosPage />} />
              <Route path="/completed" element={<CompletedTodosPage />} />
            </Routes>
          </Container>
          <Snackbar />
        </Router>
      </TodoProvider>
    </ThemeProvider>
  );
};

export default App;
