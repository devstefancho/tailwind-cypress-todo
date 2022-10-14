import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { InputTextType } from "../types/input.type";

type Props = {
  setItem: (text: InputTextType) => void;
};

const InputContainer: FC<Props> = ({ setItem }) => {
  const [value, setValue] = useState("");
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    setItem(value);
    setValue("");
  };
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <form action="" onSubmit={submitHandler} className="flex gap-2">
      <label htmlFor="new-todo" />
      <input
        type="text"
        id="new-todo"
        autoComplete="off"
        className="border rounded py-2 px-2.5"
        value={value}
        onChange={changeHandler}
      />
      <button type="submit" className="p-3 border border-gray-500 rounded">
        <GrAdd />
      </button>
    </form>
  );
};

export default InputContainer;
