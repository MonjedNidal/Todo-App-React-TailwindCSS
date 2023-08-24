import { useState } from "react";
import CheckIcon from "../images/icon-check.svg";
// import CrossIcon from "../images/icon-cross.svg";
function Todo({
  id,
  text,
  isCompleted,
  handleTodoCompleted,
  handleDeleteTodo,
}) {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isHovered, setIsHovered] = useState(false);
  return (
    // dark:bg-VeryDarkDesaturatedBlue dark:border-VeryDarkGrayishBlue
    <li
      className=" flex list-none content-center justify-between border-b hover:cursor-pointer border-LightGrayishBlue dark:border-VeryDarkGrayishBlue"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        className="flex p-4 w-full content-center"
        onClick={() => {
          setIsChecked((isChecked) => !isChecked);
          handleTodoCompleted(id);
        }}
      >
        <div
          className={` flex content-center border-LightGrayishBlue dark:border-DarkGrayishBlueDark rounded-full border w-4 h-4 mr-2 ${
            isChecked ? "checkedTodo border-none" : ""
          }`}
        >
          {isChecked && (
            <img src={CheckIcon} alt="" className="h-fit pl-0.5 self-center" />
          )}
        </div>
        <p
          className={`leading-5 h-fit dark:text-LightGrayishBlueDark2 ${
            !isChecked ? "text-VeryDarkGrayishBlue" : ""
          } ${isChecked ? "line-through text-DarkGrayishBlue" : ""}`}
        >
          {text}
        </p>
      </div>
      {isHovered && (
        <div
          onClick={() => {
            handleDeleteTodo(id);
          }}
        >
          <svg
            className="h-5 mt-4 mr-4 fill-DarkGrayishBlue hover:fill-VeryDarkGrayishBlue hover:cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
          >
            <path
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </div>
      )}
    </li>
  );
}

export default Todo;
