import {
  type ChangeEvent,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import RegisterContext from "../context/register";

type Props = {
  rules: IInputRule;
  labelText: string;
  id: number;
  textArea?: boolean;
};

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
  const inputRef =
    useRef<
      Props extends { textArea: boolean }
        ? HTMLTextAreaElement
        : HTMLInputElement
    >(null);
  const [error, setError] = useState("");
  const { validate, setValidate, errors, shouldFocus } =
    useContext(RegisterContext);

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
      setError(validated);
      setValidate(false);
    }
  }

  const addError = () => {
    errors.current = Array.from(new Set([...errors.current, id]));
  };
  const removeError = () => {
    errors.current = errors.current.filter((i) => i !== id);
  };

  useEffect(() => {
    if (validate) forceValidate();
  }, [validate]);

  async function validateInput(input: string): Promise<string> {
    function check(): string {
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

    const checked = check();

    if (checked) addError();
    else removeError();

    return checked;
  }

  useEffect(() => {
    console.log(shouldFocus);
    if (shouldFocus === id) inputRef.current?.focus();
  }, [id, shouldFocus]);

  useEffect(() => addError(), []);

  return textArea ? (
    <div className="input-group">
      <label htmlFor="textarea">Description</label>
      <textarea
        autoComplete="off"
        className={error ? "error" : ""}
        id="textarea"
        value={input}
        ref={inputRef as React.Ref<HTMLTextAreaElement>}
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
        ref={inputRef}
        type="text"
        id={`input-${id}`}
        className={`${error ? "error" : ""}${id === 2 ? " short" : ""}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
