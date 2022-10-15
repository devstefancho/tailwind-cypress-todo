import { v4 } from "uuid";

export type InputTextType = string;
export type IsComplete = boolean;
export type Id = ReturnType<typeof v4>;

export type TodoItemType = {
  id: Id;
  text: InputTextType;
  isComplete: IsComplete;
};
