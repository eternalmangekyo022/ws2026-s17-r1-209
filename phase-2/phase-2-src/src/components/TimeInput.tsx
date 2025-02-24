import { useState, useContext, useEffect } from "react";
import RegisterContext from "../context/register";
import TimeContext from "../context/opentime";

type Props = {
  labelText: string;
  id: number;
  name: "from" | "to";
};

export default function TimeInput({ labelText, id, name }: Props) {
  const [error, setError] = useState("");
  const { fromRef, toRef } = useContext(TimeContext);
  const currentRef = id === 6 ? fromRef : toRef;
  const { validate, setValidate, errors, shouldFocus, form, dispatchForm } =
    useContext(RegisterContext);

  async function validateInput(currentVal?: string): Promise<string> {
    if (!fromRef.current || !toRef.current) return "";
    const toCheck =
      currentVal !== undefined ? currentVal : currentRef.current?.value;

    if (!toCheck) return "Field required";
    return "";
  }

  async function handleOnChange(currentVal: string) {
    dispatchForm({ type: name as keyof IFormState, payload: currentVal });
    const validated = await validateInput(currentVal);
    if (error) {
      if (!validated) {
        setError("");
        setValidate(true);
        removeError();
      }
    }
    if (
      (!!errors.current.filter((i) => i.id === 6).length ||
        !!errors.current.filter((i) => i.id === 7).length) &&
      error
    ) {
      setValidate(true);
    } else addError();
  }

  const addError = () => {
    console.log("added error");
    const ids = errors.current.map((i) => i.id);
    if (!ids.includes(id)) {
      errors.current = [...errors.current, { id, name }];
    }
  };
  const removeError = () => {
    errors.current = errors.current.filter((i) => i.id !== id);
  };

  useEffect(() => {
    if (validate) {
      validateInput().then((validated) => {
        setError(validated);
        setValidate(false);
        if (validated) {
          addError();
        } else removeError();
        if (validated && Math.min(...errors.current.map((i) => i.id)) === id)
          currentRef.current?.focus();
      });
    }
  }, [validate]);

  useEffect(() => {
    if (shouldFocus.id === id) currentRef.current?.focus();
  }, [id, shouldFocus]);

  useEffect(() => addError(), []);
  return (
    <div className="input-group">
      <label htmlFor={`input-${id}`}>{labelText}</label>
      <input
        ref={currentRef}
        type="time"
        value={form[name]}
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        id={`input-${id}`}
        className={`short${error ? " error" : ""}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
