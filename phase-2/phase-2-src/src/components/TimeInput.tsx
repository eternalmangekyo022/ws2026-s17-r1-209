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

  function validateInput(currentVal?: string): string {
    if (!fromRef.current || !toRef.current) return "";
    const toCheck =
      currentVal !== undefined ? currentVal : currentRef.current?.value;

    if (!toCheck) return "Field required";
    return "";
  }

  function handleOnChange(currentVal: string) {
    dispatchForm({ type: name, payload: currentVal });
    const validated = validateInput(currentVal);

    if (validated) {
      setError(validated);
      addError();
    } else {
      setError("");
      removeError();
    }

    if (errors.current.filter((i) => i.id === id).length && !validated) {
      setValidate(true);
    }
  }

  const addError = () => {
    if (!errors.current.filter((i) => i.id === id).length) {
      errors.current = [...errors.current, { id, name }];
    }
  };

  const removeError = () => {
    errors.current = errors.current.filter((i) => i.id !== id);
  };

  useEffect(() => {
    if (validate) {
      const validated = validateInput();
      setError(validated);
      setValidate(false);

      if (validated) {
        addError();
        if (Math.min(...errors.current.map((i) => i.id)) === id) {
          currentRef.current?.focus();
        }
      } else {
        removeError();
      }
    }
  }, [validate]);

  useEffect(() => {
    if (shouldFocus.id === id) currentRef.current?.focus();
  }, [shouldFocus]);

  useEffect(() => {
    if (!currentRef.current?.value) addError();
  }, []);

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
