import { FC, useState } from "react";
import TodoItem from "../components/TodoItem";
import InputContainer from "./InputContainer";
import { InputTextType } from "../types/input.type";
import { RiTodoLine } from "react-icons/ri";

const TodoContainer: FC = () => {
  const [list, setList] = useState<InputTextType[]>([]);

  const setItem = (text: InputTextType) => {
    setList((prev) => [...prev, text]);
  };

  return (
    <div className="mx-12 my-8">
      <InputContainer setItem={setItem} />
      <ul className="flex flex-col gap-y-4 my-8">
        {list.map((item) => {
          return (
            <li key={item} className="flex items-center gap-x-2">
              <RiTodoLine />
              <TodoItem text={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoContainer;
