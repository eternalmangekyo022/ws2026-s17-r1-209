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
  name: keyof IFormState;
  textArea?: boolean;
};

export default function Input({
  labelText,
  textArea,
  id,
  name,
  rules: {
    isNum = false,
    length: [min, max],
  },
}: Props) {
  const inputRef =
    useRef<
      Props extends { textArea: boolean }
        ? HTMLTextAreaElement
        : HTMLInputElement
    >(null);
  const [error, setError] = useState("");
  const { validate, setValidate, errors, shouldFocus, dispatchForm, form } =
    useContext(RegisterContext);

  async function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const {
      target: { value: inputVal },
    } = e;
    if (inputVal.length > max) e.preventDefault();
    else dispatchForm({ type: name, payload: inputVal });

    const validated = await validateInput(inputVal);
    if (error) setError(validated);
  }

  async function forceValidate() {
    const validated = await validateInput(form[name]);
    if (validated) {
      setError(validated);
      setValidate(false);
    }
  }

  const addError = () => {
    const ids = errors.current.map((i) => i.id);
    if (!ids.includes(id)) {
      errors.current = [...errors.current, { id, name }];
    }
  };
  const removeError = () => {
    errors.current = errors.current.filter((i) => i.id !== id);
  };

  useEffect(() => {
    if (validate) forceValidate();
  }, [validate]);

  async function validateInput(input: string): Promise<string> {
    function check(): string {
      if (!input.trim()) return "Required";
      else if (input.length < min) return `Must be at least ${min} character`;
      else if (!isNum && input.length > max)
        return `Must be ${min} characters at most`;
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
    if (shouldFocus.id === id) inputRef.current?.focus();
  }, [id, shouldFocus]);

  useEffect(() => {
    if (form[name].trim() === "") addError();
  }, []);

  return textArea ? (
    <div className="input-group">
      <label htmlFor="textarea">Description</label>
      <textarea
        autoComplete="off"
        className={error ? "error" : ""}
        id="textarea"
        value={form[name]}
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
        value={form[name]}
        ref={inputRef}
        type="text"
        id={`input-${id}`}
        className={`${error ? "error" : ""}${id === 2 ? " short" : ""}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
