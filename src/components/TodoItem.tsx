import { FC } from "react";
import { InputTextType, IsComplete } from "../types/input.type";

type Props = {
  text: InputTextType;
  isComplete: IsComplete;
};

const TodoItem: FC<Props> = ({ text, isComplete }) => {
  return (
    <div
      className={`group-hover:text-white ${isComplete ? "line-through" : ""}`}
    >
      {text}
    </div>
  );
};

export default TodoItem;
