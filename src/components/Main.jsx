import { useState, useEffect } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

function Main({ handleThemeSwitch, isDarkTheme }) {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [activeTodosCounter, setActiveTodosCounter] = useState(0);
  const [filter, setFilter] = useState("All");

  const handleAddTodo = (todoText) => {
    const newArray = [
      ...todos,
      { text: todoText, completed: false, id: uuidv4() },
    ];
    setTodos(newArray);
  };

  useEffect(() => {
    if (filter === "All") {
      setFilteredTodos([...todos]);
    } else if (filter === "Active") {
      const activeTodos = todos.filter((item) => !item.completed);
      setFilteredTodos(activeTodos);
    } else if (filter === "Completed") {
      const completedTodos = todos.filter((item) => item.completed === true);
      setFilteredTodos(completedTodos);
    }
    const activeTodos = todos.filter((item) => !item.completed);
    setActiveTodosCounter(activeTodos.length);
  }, [filter, todos]);

  const handleTodoCompleted = (id) => {
    const newTodos = [...todos];
    for (let i = 0; i < todos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos[i].completed = !newTodos[i].completed;
      }
    }
    setTodos(newTodos);
  };
  const handleDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleClearCompleted = () => {
    let newTodos = todos.filter((todo) => todo.completed !== true);
    setTodos(newTodos);
  };
  return (
    <div className="absolute flex flex-col text-center self-center top-16 w-10/12  min-w-fit lg:w-5/12 md:w-7/12 mx-2">
      <Header handleThemeSwitch={handleThemeSwitch} isDarkTheme={isDarkTheme} />
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodosList
        handleTodoCompleted={handleTodoCompleted}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        filter={filter}
        setFilter={setFilter}
        handleDeleteTodo={handleDeleteTodo}
        activeTodosCounter={activeTodosCounter}
        handleClearCompleted={handleClearCompleted}
      />
      <p className="my-8 max-sm:mt-16 text-sm text-DarkGrayishBlue">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default Main;
