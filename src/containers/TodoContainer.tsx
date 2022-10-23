import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../components/TodoItem";
import InputContainer from "./InputContainer";
import { InputTextType, TodoItemType } from "../types/input.type";
import TodoStatus from "../components/TodoStatus";
import { RiDeleteBinLine} from "react-icons/ri";

const TodoContainer: FC = () => {
  const [list, setList] = useState<TodoItemType[]>([]);

  const setItem = (text: InputTextType) => {
    setList((prev) => {
      const newItem: TodoItemType = {
        id: uuidv4(),
        text,
        isComplete: false
      };
      return [...prev, newItem];
    });
  };

  const clickTodoItem = (id: string) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setList(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="min-w-[50%] my-8">
      <InputContainer setItem={setItem} />
      <ul className="flex flex-col gap-y-4 my-8" data-cy="todo-list">
        {list.map((item) => {
          return (
            <li
              key={item.text}
              className="group flex items-center gap-x-2 select-none cursor-pointer px-3 py-2 rounded hover:bg-sky-500"
              onClick={() => clickTodoItem(item.id)}
            >
              <TodoStatus isComplete={item.isComplete} />
              <TodoItem text={item.text} isComplete={item.isComplete} />
              <RiDeleteBinLine className="group-hover:fill-white text-body1 ml-auto" onClick={() => removeItem(item.id)}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoContainer;
