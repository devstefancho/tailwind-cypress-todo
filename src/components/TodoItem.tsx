import { FC } from "react";
import { InputTextType } from "../types/input.type";

type Props = {
  text: InputTextType;
};

const TodoItem: FC<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default TodoItem;
