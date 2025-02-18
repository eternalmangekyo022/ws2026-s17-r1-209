import { useState, useContext, useEffect } from "react";
import RegisterContext from "../context/register";
import TimeContext from "../context/opentime";

type Props = {
  labelText: string;
  id: number;
};

export default function TimeInput({ labelText, id }: Props) {
  const [error, setError] = useState("");
  const { fromRef, toRef } = useContext(TimeContext);
  const { dispatchError, validate, setValidate, errors } =
    useContext(RegisterContext);

  function validateTimes(_smaller: string, _bigger: string): boolean {
    const [smh, smm]: number[] = _smaller.split(":").map(Number);
    const [bgh, bgm]: number[] = _bigger.split(":").map(Number);

    //everythin called smaller and bigger is referring to how it SHUOLD be, not how it is
    // eg. smaller hour is from input's hour
    //return false if:
    // bigger hour is smaller than smaller hour
    // OR
    // bigger hour is same as smaller BUT smaller minute is bigger than bigger minute
    // else true
    return !(smh > bgh || (smh === bgh && smm > bgm));
  }

  async function validateInput(currentVal?: string): Promise<string> {
    if (!fromRef.current || !toRef.current) return "";
    const toCheck =
      currentVal !== undefined
        ? currentVal
        : id === 6
        ? fromRef.current.value
        : toRef.current.value;

    if (!toCheck) return "Field required";
    else if (
      id === 6 &&
      !validateTimes(fromRef.current.value, toRef.current.value)
    )
      return '"From" has to be earlier than "To"';
    return "";
  }

  async function handleOnChange(currentVal: string) {
    if (error) {
      const validated = await validateInput(currentVal);
      if (!validated) {
        setError("");
        setValidate(true);
      }
    } else if (errors.includes(6) || errors.includes(7)) setValidate(true);
  }

  useEffect(() => {
    if (validate) {
      validateInput().then((validated) => {
        setError(validated);
        setValidate(false);
        dispatchError({ type: validated ? "add" : "remove", payload: id });
        if (validated && Math.min(...errors) === id)
          (id === 6 ? fromRef : toRef).current?.focus();
      });
    }
  }, [validate]);

  return (
    <div className="input-group">
      <label htmlFor={`input-${id}`}>{labelText}</label>
      <input
        ref={id === 6 ? fromRef : toRef}
        type="time"
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        id={`input-${id}`}
        className={`short${error ? " error" : ""}`}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
