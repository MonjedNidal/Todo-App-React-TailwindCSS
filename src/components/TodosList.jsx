import Todo from "./Todo";

function TodosList({
  filteredTodos,
  filter,
  setFilter,
  handleTodoCompleted,
  handleDeleteTodo,
  activeTodosCounter,
  handleClearCompleted,
}) {
  return (
    <div className="w-full  bg-white mt-4 shadow-lg rounded-md rounded-t- dark:bg-VeryDarkDesaturatedBlue">
      <ul className="first:rounded-t-md dark:bg-VeryDarkDesaturatedBlue">
        {filteredTodos.map((todo, index) => (
          <div key={todo.id}>
            <Todo
              handleTodoCompleted={handleTodoCompleted}
              id={todo.id}
              text={todo.text}
              isCompleted={todo.completed}
              handleDeleteTodo={handleDeleteTodo}
            />
          </div>
        ))}
      </ul>
      <div className="h-9 relative flex-wrap flex justify-between content-center text-DarkGrayishBlue dark:bg-VeryDarkDesaturatedBlue dark:text-DarkGrayishBlue dark:rounded-b-md">
        <span className="text-xs mx-2">
          {activeTodosCounter} {activeTodosCounter === 1 ? "item" : "items"}{" "}
          left
        </span>
        <div className="text-xs flex font-bold dark:text-DarkGrayishBlue  max-sm:absolute max-sm:self-center max-sm:justify-center max-sm:top-12 max-sm:bg-white max-sm:shadow-lg max-sm:rounded-md max-sm:h-fit max-sm:p-2 max-sm:dark:bg-VeryDarkDesaturatedBlue max-sm:w-full">
          <p
            className={`mx-2 hover:text-VeryDarkGrayishBlue dark:hover:text-LightGrayishBlue ${
              filter === "All"
                ? "text-BrightBlue hover:text-BrightBlue dark:hover:text-BrightBlue"
                : ""
            } hover:cursor-pointer `}
            onClick={() => {
              setFilter("All");
            }}
          >
            All
          </p>
          <p
            className={`mx-2 hover:text-VeryDarkGrayishBlue hover:cursor-pointer dark:hover:text-LightGrayishBlue ${
              filter === "Active"
                ? "text-BrightBlue hover:text-BrightBlue dark:hover:text-BrightBlue"
                : ""
            } hover:cursor-pointer`}
            onClick={() => {
              setFilter("Active");
            }}
          >
            Active
          </p>
          <p
            className={`mx-2 hover:text-VeryDarkGrayishBlue hover:cursor-pointer dark:hover:text-LightGrayishBlue ${
              filter === "Completed"
                ? "text-BrightBlue hover:text-BrightBlue dark:hover:text-BrightBlue"
                : ""
            } hover:cursor-pointer `}
            onClick={() => {
              setFilter("Completed");
            }}
          >
            Completed
          </p>
        </div>
        <span
          className="text-xs mx-2 hover:text-VeryDarkGrayishBlue hover:cursor-pointer dark:hover:text-LightGrayishBlue"
          onClick={() => {
            handleClearCompleted();
          }}
        >
          Clear Completed
        </span>
      </div>
    </div>
  );
}

export default TodosList;
