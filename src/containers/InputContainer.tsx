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
        data-cy="input-text"
        autoComplete="off"
        className="border rounded py-2 px-2.5 text-body1 flex-1"
        value={value}
        onChange={changeHandler}
      />
      <button
        type="submit"
        data-cy="add-new-btn"
        className="p-3 border border-gray-500 rounded text-body1 hover:bg-gray-200"
      >
        <GrAdd className="hover:fill-white"/>
      </button>
    </form>
  );
};

export default InputContainer;
