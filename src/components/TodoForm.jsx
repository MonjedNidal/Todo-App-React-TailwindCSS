import { useState } from "react";

function TodoForm({ handleAddTodo }) {
  const [inputValue, setinputValue] = useState("");
  const handleKeyPress = (key) => {
    if (key === "Enter" && inputValue !== "") {
      handleAddTodo(inputValue);
      setinputValue("");
    }
  };
  return (
    <div className="mt-7 relative ">
      <input
        className="w-full h-12 outline-0 text-VeryDarkGrayishBlue bg-white rounded-md pl-10 pt-1 dark:bg-VeryDarkDesaturatedBlue dark:text-white caret-BrightBlue"
        placeholder="Create a new todo..."
        type="text"
        value={inputValue}
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyPress(e.key);
        }}
      />
      <div className="absolute hover:cursor-pointer top-4 left-3.5 rounded-full border border-LightGrayishBlue w-4 h-4 dark:border-DarkGrayishBlueDark"></div>
    </div>
  );
}

export default TodoForm;
