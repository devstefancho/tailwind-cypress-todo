import { FC } from "react";
import { RiTodoLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { IsComplete } from "../types/input.type";

type Props = {
  isComplete: IsComplete;
};

const TodoStatus: FC<Props> = ({ isComplete }) => {
  return (
    <>
      {isComplete ? (
        <MdDone className="fill-green-500 group-hover:fill-white" />
      ) : (
        <RiTodoLine className="group-hover:fill-white" />
      )}
    </>
  );
};

export default TodoStatus;
