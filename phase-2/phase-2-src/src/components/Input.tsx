import { type ChangeEvent, useState, useContext, useEffect } from "react";
import RegisterContext from "../context/register";

type ITextArea = BaseProps & {
  textArea: boolean;
  id?: number;
};

type INonTextArea = BaseProps & {
  textArea?: boolean;
  id: number;
};

type BaseProps = {
  rules: IInputRule;
  labelText: string;
};

type Props = ITextArea | INonTextArea;

export default function Input({
  labelText,
  textArea,
  id,
  rules: {
    isNum = false,
    length: [min, max],
  },
}: Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { dispatchError, validate, setValidate } = useContext(RegisterContext);

  async function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const {
      target: { value: inputVal },
    } = e;
    if (inputVal.length > max) e.preventDefault();
    else setInput(inputVal);

    if (error) setError(await validateInput(inputVal));
  }

  async function forceValidate() {
    const validated = await validateInput(input);
    if (validated) {
      console.log(validated);
      setError(validated);
      setValidate(false);
    }
    dispatchError({
      type: validated ? "add" : "remove",
      payload: id as number,
    });
  }

  useEffect(() => {
    if (validate) forceValidate();
  }, [validate]);

  async function validateInput(input: string): Promise<string> {
    if (!input.trim()) return "Required";
    else if (input.length < min) return "Input is shorter than expected";
    else if (!isNum && input.length > max)
      return "Input is longer than expected";
    else if (isNum) {
      const number = "123456789";
      for (let i = 0; i < input.length; i++) {
        if (!number.includes(input[i])) {
          return "Input is not a number";
        }
      }
      return "";
    } else return "";
  }

  return textArea ? (
    <div className="input-group">
      <label htmlFor="textarea">Description</label>
      <textarea
        autoComplete="off"
        className={error ? "error" : ""}
        id="textarea"
        value={input}
        onChange={handleOnChange}
        rows={5}
      ></textarea>
      {error && <span className="input-error">{error}</span>}
    </div>
  ) : (
    <div className="input-group">
      <label htmlFor={`input-${id}`}>{labelText}</label>
      <input
        autoComplete="off"
        onChange={handleOnChange}
        value={input}
        type="text"
        id={`input-${id}`}
        className={`${error ? "error" : ""}${id === 2 ? " short" : ""}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
